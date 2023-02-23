import { ApiProperty } from '@nestjs/swagger';

export class CreateToDoReqDto {
    @ApiProperty()
    date: string;

    @ApiProperty()
    content: string;
}
