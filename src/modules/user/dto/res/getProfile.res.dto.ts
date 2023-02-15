import { ApiProperty } from '@nestjs/swagger';

export class MyPetsObj {
    @ApiProperty()
    myPetId: number;

    @ApiProperty()
    breed: string;

    @ApiProperty()
    name: string;
}

export class GetProfileObj {
    @ApiProperty()
    userId: number;

    @ApiProperty()
    nickName: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    feedCount: number;

    @ApiProperty()
    freindCount: number;

    @ApiProperty({ type: MyPetsObj })
    myPets: MyPetsObj[];
}

export class GetProfileSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetProfileObj })
    data: GetProfileObj;
}

export class GetProfileFailDto {
    @ApiProperty({ default: 1051 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
