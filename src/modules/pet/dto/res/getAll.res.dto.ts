import { ApiProperty } from '@nestjs/swagger';

export class GetMyPetsObj {
    @ApiProperty()
    myPetId: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    breed: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    birthDay: string;

    @ApiProperty()
    togetherDay: number;

    @ApiProperty()
    imagePath: string;
}

export class GetMyPetItems {
    @ApiProperty({ type: GetMyPetsObj })
    items: GetMyPetsObj[];
}

export class GetMyPetsSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetMyPetsObj })
    data: GetMyPetsObj;
}

export class GetMyPetsFailDto {
    @ApiProperty({ default: 1311 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
