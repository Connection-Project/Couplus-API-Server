import { ApiProperty } from '@nestjs/swagger';

export class EmailLoginReqDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}
