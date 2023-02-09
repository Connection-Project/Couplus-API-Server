import { ApiProperty } from '@nestjs/swagger';

export class NotFoundReplyDeleteDto {
    @ApiProperty({ default: 1632 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class DeleteBoardCommentReplyFailDto {
    @ApiProperty({ default: 1631 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
