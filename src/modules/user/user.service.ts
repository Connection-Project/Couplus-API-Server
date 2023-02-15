import { Injectable, Logger } from '@nestjs/common';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { MyPet } from 'src/models/MyPets.entity';
import { User } from 'src/models/User.entity';
import { FeedRepository } from 'src/repositories/feed.repository';
import { FreindRepository } from 'src/repositories/freind.repository';
import { MyPetRepository } from 'src/repositories/myPet.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { GenDigestPwd } from 'src/utils/crypto';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { EmailRegistUserReqDto, SocialRegistUserReqDto } from './dto/req/create.dto';
import { UpdateUserReqDto } from './dto/req/update.dto';

@Injectable()
export class UserService {
    constructor(
        private readonly awsService: AwsService,
        private readonly userRepository: UserRepository,
        private readonly freindRepository: FreindRepository,
        private readonly feedRepository: FeedRepository,
        private readonly myPetRepository: MyPetRepository,
    ) {}

    async emailSignUp(file: File, body: EmailRegistUserReqDto): Promise<ReturnResDto> {
        try {
            const { email } = body;
            const existUser: User = await this.userRepository.findByKey('email', email);
            let resultCode = 0;
            if (existUser) {
                // * 이미 존재 하는 계정
                resultCode = 1001;
            } else {
                let imageKey = null;
                let imagePath = null;
                if (file) {
                    const res = await this.awsService.uploadImage(file);
                    imageKey = res.Key;
                    imagePath = res.Location;
                }
                const createBody = {
                    registType: 'email',
                    imageKey,
                    imagePath,
                    ...body,
                };
                const newUser: User = await this.userRepository.create(createBody);
                await this.userRepository.save(newUser);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1002, data: null } };
        }
    }

    async socialSignUp(file: File, body: SocialRegistUserReqDto): Promise<ReturnResDto> {
        try {
            const { email } = body;
            const existUser: User = await this.userRepository.findByKey('email', email);
            let resultCode = 0;
            if (existUser) {
                // * 이미 존재 하는 계정
                resultCode = 1001;
            } else {
                let imageKey = null;
                let imagePath = null;
                if (file) {
                    const res = await this.awsService.uploadImage(file);
                    imageKey = res.Key;
                    imagePath = res.Location;
                }
                const createBody = {
                    registType: 'kakao',
                    imageKey,
                    imagePath,
                    ...body,
                };
                const newUser: User = this.userRepository.create(createBody);
                await this.userRepository.save(newUser);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1003, data: null } };
        }
    }

    async getInfo(userId: number): Promise<ReturnResDto> {
        try {
            const user: User = await this.userRepository.findByKey('id', userId);
            const data = {
                email: user.email,
                name: user.name,
                nickName: user.nickName,
                phone: user.phone,
                registType: user.registType,
            };
            return { data: { resultCode: 1, data: data } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1011, data: null } };
        }
    }

    async update(userId: number, file: File, body: UpdateUserReqDto): Promise<ReturnResDto> {
        try {
            const { password, name, phone, nickName } = body;
            const user: User = await this.userRepository.findByKey('id', userId);
            if (password.replace(/ /g, '') !== '') {
                user.password = GenDigestPwd(password);
            }
            console.log(body);
            if (name.replace(/ /g, '') !== '') user.name = name;
            if (nickName.replace(/ /g, '') !== '') user.nickName = nickName;
            if (phone.replace(/ /g, '') !== '') user.phone = phone;
            // ! 파일이 존재할 시 프로필 이미지 수정
            if (file) {
                const res = await this.awsService.uploadImage(file);
                if (res) {
                    // ! 기존 파일 삭제
                    this.awsService.s3Delete({
                        Bucket: 'pet-img',
                        Key: user.imageKey,
                    });
                    user.imageKey = res.Key;
                    user.imagePath = res.Location;
                } else {
                    Logger.log('ERROR - S3 Upload Failed');
                }
            }
            await this.userRepository.save(user);
            return { data: { resultCode: 1, data: null } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1021, data: null } };
        }
    }

    async delete(userId: number): Promise<ReturnResDto> {
        try {
            const user: User = await this.userRepository.findByKey('id', userId);
            // ! 기존 파일 삭제
            await this.awsService.s3Delete({
                Bucket: 'pet-img',
                Key: user.imageKey,
            });
            // ! 친구 목록 삭제
            await this.freindRepository.getDeleteAllByUserId(userId);
            // ! 나를 친구로 연결된 유저들 친구 목록 삭제
            await this.freindRepository.getDeleteAllByFreindId(userId);

            // ! 유저 삭제
            // TODO : 서비스화 시키려면 회원 탈퇴 정보 이원화
            await this.userRepository.delete(userId);
            return { data: { resultCode: 1, data: null } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1031, data: null } };
        }
    }

    async getUserRandom(): Promise<ReturnResDto> {
        try {
            const user: User[] = await this.userRepository.getManyRandomUser();
            console.log(user.length);
            const items = [];
            for (let i = 0; i < user.length; i++) {
                const pet: MyPet = await this.myPetRepository.getRepresentPetOne(user[i].id);
                const pets: MyPet[] = await this.myPetRepository.findAll(user[i].id);
                let breed = pet ? pet.breed : null;

                items[i] = {
                    userId: user[i].id,
                    breed: pets.length > 1 ? `${breed} 외 ${pets.length - 1}마리` : breed,
                    name: pet ? pet.name : null,
                    image: pet ? pet.imagePath : null,
                };
            }
            return { data: { resultCode: 1, data: { items: items } } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1041, data: null } };
        }
    }

    async getProfile(userId: number): Promise<ReturnResDto> {
        try {
            const user: User = await this.userRepository.findByKey('id', userId);
            const myPet: MyPet[] = (await this.myPetRepository.findAll(userId)).reverse();
            const myPets = [];
            let image = null;
            for (let i = 0; i < myPet.length; i++) {
                if (myPet[i].represent) image = myPet[i].imagePath;
                myPets[i] = {
                    myPetId: myPet[i].id,
                    breed: myPet[i].breed,
                    name: myPet[i].name,
                };
            }
            const data = {
                userId: user.id,
                nickName: user.nickName,
                image: image,
                feedCount: await this.feedRepository.getCount(userId),
                freindCount: await this.freindRepository.getCount(userId),
                myPets: myPets,
            };
            return { data: { resultCode: 1, data: data } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1051, data: null } };
        }
    }
}
