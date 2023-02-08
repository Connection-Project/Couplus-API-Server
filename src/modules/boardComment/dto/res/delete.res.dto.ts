import { ApiProperty } from '@nestjs/swagger';

export class NotFoundBoardDeleteDto {
    @ApiProperty({ default: 1532 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class DeleteBoardCommentFailDto {
    @ApiProperty({ default: 1531 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
