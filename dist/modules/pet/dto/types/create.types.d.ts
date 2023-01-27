import { User } from 'src/models/User.entity';
export declare class CreateMyPetTypesDto {
    name: string;
    breed: string;
    gender: string;
    birthDay: string;
    togetherDay: string;
    user: User;
    imageKey: string;
    imagePath: string;
}
