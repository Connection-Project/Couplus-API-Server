import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MyPet } from 'src/models/MyPets.entity';
import { CreateMyPetTypesDto } from 'src/modules/pet/dto/types/create.types';
import { Repository } from 'typeorm';

@Injectable()
export class MyPetRepository {
    constructor(
        @InjectRepository(MyPet)
        private myPetRepository: Repository<MyPet>,
    ) {}

    create(body: CreateMyPetTypesDto): MyPet {
        const myPet: MyPet = this.myPetRepository.create();
        myPet.user = body.user;
        myPet.name = body.name;
        myPet.breed = body.breed;
        myPet.gender = body.gender;
        myPet.birthDay = new Date(body.birthDay);
        myPet.togetherDay = new Date(body.togetherDay);
        myPet.imageKey = body.imageKey;
        myPet.imagePath = body.imagePath;
        return myPet;
    }

    async findAll(userId: number): Promise<MyPet[]> {
        return await this.myPetRepository
            .createQueryBuilder('mp')
            .innerJoinAndSelect('mp.user', 'u')
            .where('u.id = :userId', { userId: userId })
            .getMany();
    }

    async findOneById(myPetId: number): Promise<MyPet> {
        return await this.myPetRepository
            .createQueryBuilder('mp')
            .where('id = :myPetId', { myPetId: myPetId })
            .getOne();
    }

    async delete(myPetId: number, userId: number): Promise<void> {
        await this.myPetRepository
            .createQueryBuilder('mp')
            .innerJoinAndSelect('mp.user', 'u')
            .delete()
            .where('mp.id = :myPetId', { myPetId: myPetId })
            .andWhere('u.id = :userId', { userId: userId })
            .execute();
    }

    async save(myPet: MyPet): Promise<void> {
        await this.myPetRepository.save(myPet);
    }
}
