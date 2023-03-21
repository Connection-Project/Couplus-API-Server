export declare class GetBoardCommentReplyObj {
    replyId: number;
    profile: string;
    writer: string;
    content: string;
    mine: boolean;
    createdAt: string;
}
export declare class GetBoardCommentsObj {
    commentId: number;
    profile: string;
    writer: string;
    content: string;
    mine: boolean;
    reply: GetBoardCommentReplyObj[];
    createdAt: string;
}
export declare class GetBoardCommentsDataObj {
    items: GetBoardCommentsObj;
}
export declare class GetBoardCommentsSuccessDto {
    resultCode: number;
    data: GetBoardCommentsDataObj;
}
export declare class GetBoardCommentsFailDto {
    resultCode: number;
    data: any;
}
