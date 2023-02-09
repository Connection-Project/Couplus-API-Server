import { ApiProperty } from '@nestjs/swagger';

export class NotFoundReplyCreateDto {
    @ApiProperty({ default: 1602 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class CreateBoardCommentReplyFailDto {
    @ApiProperty({ default: 1601 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
