import { User } from 'src/models/User.entity';

export class CreateMyPetTypesDto {
    name: string;

    represent: boolean;

    breed: string;

    gender: string;

    birthDay: string;

    togetherDay: string;

    user: User;

    imageKey: string;

    imagePath: string;
}
