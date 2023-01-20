import { User } from 'src/models/User.entity';

export class CreateMyPetTypesDto {
    name: string;

    breed: string;

    gender: string;

    birthDay: Date;

    togetherDay: Date;

    user: User;

    imageKey: string;

    imagePath: string;
}
