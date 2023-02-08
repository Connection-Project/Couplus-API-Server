import { ApiProperty } from '@nestjs/swagger';

export class CreateCommentReqDto {
    @ApiProperty()
    boardId: number;

    @ApiProperty()
    content: string;
}
