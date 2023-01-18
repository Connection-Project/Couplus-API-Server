import { User } from './User.entity';
export declare class MyPet {
    id: number;
    name: string;
    breed: string;
    gender: string;
    birthDay: Date;
    togetherDay: Date;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    constructor(partial: Partial<MyPet>);
}
