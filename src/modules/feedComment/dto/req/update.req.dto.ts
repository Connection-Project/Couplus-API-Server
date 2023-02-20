import { ApiProperty } from '@nestjs/swagger';

export class UpdateFeedCommentReqDto {
    @ApiProperty()
    content: string;
}
