import { Injectable } from '@nestjs/common';
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
    ) {}

    async create(userId: number, file: File[], body: CreateMyPetReqDto): Promise<any> {
        try {
            const user: User = await this.userRepository.findByKey('id', userId);
            let imageKey = null;
            let imagePath = null;

            // TODO : 이미지 처리 예외처리를 넣어야함
            if (file['profile']) {
                imageKey = file['profile'].key;
                imagePath = cloudfrontPath(file['profile'].key);
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

    async update(myPetId: number, file: File[], body: UpdateMyPetReqDto): Promise<any> {
        try {
            // TODO : 이미지 업로드 로직 필요
        } catch (err) {
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
