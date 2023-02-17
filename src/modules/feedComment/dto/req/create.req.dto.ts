import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedCommentReqDto {
    @ApiProperty()
    feedId: number;

    @ApiProperty()
    content: string;
}
