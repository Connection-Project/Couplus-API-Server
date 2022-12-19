import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserReqDto {
    @ApiProperty()
    password?: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    gender: string;
}
