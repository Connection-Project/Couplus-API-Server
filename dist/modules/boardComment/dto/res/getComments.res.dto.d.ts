export declare class GetBoardCommentsObj {
    commentId: number;
    writer: string;
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
export declare class GetBoardCommentsFailDto {
    resultCode: number;
    data: any;
}
