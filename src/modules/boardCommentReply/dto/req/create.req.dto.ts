import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardCommentReplyReqDto {
    @ApiProperty()
    content: string;

    @ApiProperty()
    commentId: number;
}
