import { MyPet } from 'src/models/MyPets.entity';
import { CreateMyPetTypesDto } from 'src/modules/pet/dto/types/create.types';
import { Repository } from 'typeorm';
export declare class MyPetRepository {
    private myPetRepository;
    constructor(myPetRepository: Repository<MyPet>);
    create(body: CreateMyPetTypesDto): MyPet;
    findAll(userId: number): Promise<MyPet[]>;
    findOneById(myPetId: number): Promise<MyPet>;
    delete(myPetId: number, userId: number): Promise<void>;
    save(myPet: MyPet): Promise<void>;
}
