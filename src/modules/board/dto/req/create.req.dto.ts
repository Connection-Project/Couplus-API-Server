import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardReqDto {
    @ApiProperty()
    type: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;
}
