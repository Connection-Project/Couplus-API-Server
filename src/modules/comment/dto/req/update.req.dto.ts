import { ApiProperty } from '@nestjs/swagger';

export class UpdateBoardCommentReqDto {
    @ApiProperty()
    content: string;
}
