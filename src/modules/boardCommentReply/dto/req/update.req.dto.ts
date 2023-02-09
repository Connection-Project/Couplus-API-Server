import { ApiProperty } from '@nestjs/swagger';

export class UpdateBoardCommentReplyDto {
    @ApiProperty()
    content: string;
}
