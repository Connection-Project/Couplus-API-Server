import { MyPet } from './MyPets.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    name: string;
    nickName: string;
    phone: string;
    accountId: string;
    registType: string;
    createdAt: Date;
    updatedAt: Date;
    pet: MyPet;
    constructor(partial: Partial<User>);
}
