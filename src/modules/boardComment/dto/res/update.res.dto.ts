import { ApiProperty } from '@nestjs/swagger';

export class NotFoundBoardUpdateDto {
    @ApiProperty({ default: 1522 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class UpdateBoardCommentFailDto {
    @ApiProperty({ default: 1521 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
