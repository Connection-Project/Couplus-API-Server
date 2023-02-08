import { ApiProperty } from '@nestjs/swagger';

export class GetOneMyPetObj {
    @ApiProperty()
    myPetId: number;

    @ApiProperty()
    represent: boolean;

    @ApiProperty()
    name: string;

    @ApiProperty()
    breed: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    imagePath: string;

    @ApiProperty()
    birthYear: string;

    @ApiProperty()
    birthMonth: string;

    @ApiProperty()
    birthDate: string;

    @ApiProperty()
    togetherYear: string;

    @ApiProperty()
    togetherMonth: string;

    @ApiProperty()
    togetherDate: string;
}

export class GetOneMyPetSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetOneMyPetObj })
    data: GetOneMyPetObj;
}

export class GetOneMyPetFailDto {
    @ApiProperty({ default: 1341 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
