import { Injectable } from '@nestjs/common';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { MyPet } from 'src/models/MyPets.entity';
import { User } from 'src/models/User.entity';
import { MyPetRepository } from 'src/repositories/myPet.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { cloudfrontPath } from 'src/utils/cloudFront.utils';
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

    async update(myPetId: number, file: File, body: UpdateMyPetReqDto): Promise<any> {
        try {
            const { name, breed, gender, birthDay, togetherDay } = body;
            let status = 0;
            let resultCode = 0;
            const myPet: MyPet = await this.myPetRepository.findOneById(myPetId);
            if (myPet) {
                if (name) myPet.name = name;
                if (breed) myPet.breed = breed;
                if (gender) myPet.gender = gender;
                if (birthDay) myPet.birthDay = new Date(birthDay);
                if (togetherDay) myPet.togetherDay = new Date(togetherDay);
                // ! 파일이 존재할 시 프로필 이미지 수정
                if (file) {
                    // TODO : 기존 이미지 S3에서 삭제
                    const res = await this.awsService.uploadImage(file);
                    myPet.imageKey = res.Key;
                    myPet.imagePath = res.Location;
                }
                await this.myPetRepository.save(myPet);
                status = 200;
                resultCode = 1;
            } else {
                status = 201;
                resultCode = 1322;
            }
            return { status: status, data: { reusltCode: resultCode, data: null } };
        } catch (err) {
            // TODO : 서버 에러시 이미지 파일 삭제
            console.log(err);
            return { status: 401, data: { resultCode: 1321, data: null } };
        }
    }

    async delete(userId: number, myPetId: number): Promise<any> {
        try {
            await this.myPetRepository.delete(myPetId, userId);
            return { status: 200, data: { resultCode: 1, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1331, data: null } };
        }
    }
}
