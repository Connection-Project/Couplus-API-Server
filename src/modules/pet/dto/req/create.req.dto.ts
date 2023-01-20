import { ApiProperty } from '@nestjs/swagger';
export class CreateMyPetReqDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    breed: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    birthDay: Date;

    @ApiProperty()
    togetherDay: Date;
}
