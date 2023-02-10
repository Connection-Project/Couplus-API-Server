export declare class GetBoardCommentReplyObj {
    replyId: number;
    writer: string;
    content: string;
    mine: boolean;
    createdAt: string;
}
export declare class GetBoardCommentReplysDataObj {
    items: GetBoardCommentReplyObj;
}
export declare class GetBoardCommentsReplySuccessDto {
    resultCode: number;
    data: GetBoardCommentReplysDataObj;
}
export declare class GetBoardCommentReplysFailDto {
    resultCode: number;
    data: any;
}
