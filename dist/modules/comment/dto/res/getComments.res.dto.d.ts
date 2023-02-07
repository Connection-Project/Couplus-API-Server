export declare class GetBoardCommentsObj {
    commentId: number;
    wirter: string;
    content: string;
    mine: boolean;
    createdAt: string;
}
export declare class GetBoardCommentsDataObj {
    items: GetBoardCommentsObj;
}
export declare class GetBoardCommentsSuccessDto {
    resultCode: number;
    data: GetBoardCommentsDataObj;
}
