import { ApiProperty } from '@nestjs/swagger';

export class RegistUserReqDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password?: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    nickName: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    accountId?: string;
}
