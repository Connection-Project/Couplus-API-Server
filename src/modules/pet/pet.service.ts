import { Injectable, Logger } from '@nestjs/common';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { MyPet } from 'src/models/MyPets.entity';
import { User } from 'src/models/User.entity';
import { MyPetRepository } from 'src/repositories/myPet.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { getDateDiff, getYearDiff } from 'src/utils/date';
import { CreateMyPetReqDto } from './dto/req/create.req.dto';
import { UpdateMyPetReqDto } from './dto/req/update.req.dto';

@Injectable()
export class PetService {
    constructor(
        private readonly myPetRepository: MyPetRepository,
        private readonly userRepository: UserRepository,
        private readonly awsService: AwsService,
    ) {}

    async create(userId: number, file: File, body: CreateMyPetReqDto): Promise<any> {
        try {
            const user: User = await this.userRepository.findByKey('id', userId);
            let imageKey = null;
            let imagePath = null;

            // TODO : 이미지 처리 예외처리를 넣어야함
            if (file) {
                const res = await this.awsService.uploadImage(file);
                imageKey = res.Key;
                imagePath = res.Location;
            }

            const createBody = {
                user: user,
                imageKey: imageKey,
                imagePath: imagePath,
                ...body,
            };
            const myPet: MyPet = this.myPetRepository.create(createBody);
            await this.myPetRepository.save(myPet);
            return { status: 200, data: { resultCode: 1, data: null } };
        } catch (err) {
            // TODO : 서버 에러시 이미지 파일 삭제
            console.log(err);
            return { status: 401, data: { resultCode: 1301, data: null } };
        }
    }

    async getMyPet(userId: number, myPetId: number): Promise<any> {
        try {
            const myPet: MyPet = await this.myPetRepository.findOneById(userId, myPetId);
            let data = null;
            const birthDay = myPet.birthDay.toISOString().substring(0, 10).split('-');
            const togetherDay = myPet.togetherDay.toISOString().substring(0, 10).split('-');

            data = {
                myPetId: myPet.id,
                name: myPet.name,
                breed: myPet.breed,
                gender: myPet.gender,
                imagePath: myPet.imagePath,
                birthYear: birthDay[0],
                birthMonth: birthDay[1],
                birthDate: birthDay[2],
                togetherYear: togetherDay[0],
                togetherMonth: togetherDay[1],
                togetherDate: togetherDay[2],
            };
            return { status: 200, data: { resultCode: 1, data: data } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1341, data: null } };
        }
    }

    async getMyPets(userId: number): Promise<any> {
        try {
            const myPet: MyPet[] = await this.myPetRepository.findAll(userId);
            const items = [];
            for (let i = 0; i < myPet.length; i++) {
                items[i] = {
                    myPetId: myPet[i].id,
                    name: myPet[i].name,
                    age: getYearDiff(new Date(myPet[i].birthDay), new Date()),
                    breed: myPet[i].breed,
                    gender: myPet[i].gender,
                    birthDay: myPet[i].birthDay.toISOString().substring(0, 10),
                    togetherDay: getDateDiff(new Date(myPet[i].togetherDay), new Date()),
                    imagePath: myPet[i].imagePath,
                };
            }
            return { status: 200, data: { resultCode: 1, data: { items: items } } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1311, data: null } };
        }
    }

    async update(userId: number, myPetId: number, file: File, body: UpdateMyPetReqDto): Promise<any> {
        try {
            const { name, breed, gender, birthDay, togetherDay } = body;
            let status = 0;
            let resultCode = 0;
            const myPet: MyPet = await this.myPetRepository.findOneById(userId, myPetId);
            if (myPet) {
                if (name !== '') myPet.name = name;
                if (breed !== '') myPet.breed = breed;
                if (gender !== '') myPet.gender = gender;
                if (birthDay !== '' && birthDay !== null) myPet.birthDay = new Date(birthDay);
                if (togetherDay !== '' && birthDay !== null) myPet.togetherDay = new Date(togetherDay);
                // ! 파일이 존재할 시 프로필 이미지 수정
                if (file) {
                    const res = await this.awsService.uploadImage(file);
                    if (res) {
                        // ! 기존 파일 삭제
                        this.awsService.s3Delete({
                            Bucket: 'pet-img',
                            Key: myPet.imageKey,
                        });
                        myPet.imageKey = res.Key;
                        myPet.imagePath = res.Location;
                    } else {
                        Logger.log('ERROR - S3 Upload Failed');
                    }
                }
                await this.myPetRepository.save(myPet);
                status = 200;
                resultCode = 1;
            } else {
                status = 201;
                resultCode = 1322;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        } catch (err) {
            // TODO : 서버 에러시 이미지 파일 삭제
            console.log(err);
            return { status: 401, data: { resultCode: 1321, data: null } };
        }
    }

    async delete(userId: number, myPetId: number): Promise<any> {
        try {
            const myPet: MyPet = await this.myPetRepository.findOneById(userId, myPetId);
            // ! 기존 파일 삭제
            await this.awsService.s3Delete({
                Bucket: 'pet-img',
                Key: myPet.imageKey,
            });
            await this.myPetRepository.delete(myPetId, userId);
            return { status: 200, data: { resultCode: 1, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1331, data: null } };
        }
    }
}
