export declare class GetFeedCommentsObj {
    commentId: number;
    profileImage: string;
    writer: string;
    content: string;
    mine: boolean;
    createdAt: string;
}
export declare class GetFeedCommentsDataObj {
    items: GetFeedCommentsObj[];
}
export declare class GetFeedCommentsSuccessDto {
    resultCode: number;
    data: GetFeedCommentsDataObj;
}
export declare class GetFeedCommentsFailDto {
    resultCode: number;
    data: any;
}
