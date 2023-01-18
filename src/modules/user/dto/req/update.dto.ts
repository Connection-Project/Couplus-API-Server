import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserReqDto {
    @ApiProperty()
    password?: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    nickName: string;

    @ApiProperty()
    phone: string;
}
