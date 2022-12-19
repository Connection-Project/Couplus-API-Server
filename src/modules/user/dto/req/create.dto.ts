import { ApiProperty } from '@nestjs/swagger';

export class RegistUserReqDto {
    @ApiProperty({ format: 'email' })
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    profile?: string;
}
