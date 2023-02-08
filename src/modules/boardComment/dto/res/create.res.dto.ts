import { ApiProperty } from '@nestjs/swagger';

export class NotFoundBoardCreateDto {
    @ApiProperty({ default: 1502 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class CreateBoardCommentFailDto {
    @ApiProperty({ default: 1501 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
