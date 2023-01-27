import { ApiProperty } from '@nestjs/swagger';

export class UpdateMyPetReqDto {
    @ApiProperty()
    name?: string;

    @ApiProperty()
    breed?: string;

    @ApiProperty()
    gender?: string;

    @ApiProperty()
    birthDay?: string;

    @ApiProperty()
    togetherDay?: string;
}
