import { ApiProperty } from '@nestjs/swagger';

export class getInfoObj {
    @ApiProperty()
    email: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    userCode: string;
}
