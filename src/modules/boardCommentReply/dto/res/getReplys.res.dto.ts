import { ApiProperty } from '@nestjs/swagger';

export class GetBoardCommentReplyObj {
    @ApiProperty()
    replyId: number;

    @ApiProperty()
    wirter: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    mine: boolean;

    @ApiProperty()
    createdAt: string;
}

export class GetBoardCommentReplysDataObj {
    @ApiProperty({ type: GetBoardCommentReplyObj })
    items: GetBoardCommentReplyObj;
}

export class GetBoardCommentsSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetBoardCommentReplysDataObj })
    data: GetBoardCommentReplysDataObj;
}

export class GetBoardCommentReplysFailDto {
    @ApiProperty({ default: 1611 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
