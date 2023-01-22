import { User } from './User.entity';
export declare class MyPet {
    id: number;
    name: string;
    breed: string;
    gender: string;
    birthDay: Date;
    togetherDay: Date;
    imageKey: string;
    imagePath: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    constructor(partial: Partial<MyPet>);
}
