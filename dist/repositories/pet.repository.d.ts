import { MyPet } from 'src/models/MyPets.entity';
import { Repository } from 'typeorm';
export declare class MyPetRepository {
    private myPetRepository;
    constructor(myPetRepository: Repository<MyPet>);
}
