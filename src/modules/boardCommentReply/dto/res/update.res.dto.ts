import { ApiProperty } from '@nestjs/swagger';

export class NotFoundReplyUpdateDto {
    @ApiProperty({ default: 1622 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class UpdateBoardCommentReplyFailDto {
    @ApiProperty({ default: 1621 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
