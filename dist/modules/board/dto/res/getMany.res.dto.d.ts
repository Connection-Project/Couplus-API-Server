export declare class GetManyBoardItemObj {
    boardId: number;
    writer: string;
    image: string;
    title: string;
    content: string;
    liked: boolean;
    likedCount: number;
    createdAt: string;
}
export declare class GetManyBoardObj {
    items: GetManyBoardItemObj;
    count: number;
}
export declare class GetManyBoardSuccessDto {
    resultCode: number;
    data: GetManyBoardObj;
}
export declare class GetManyBoardFailDto {
    resultCode: number;
    data: any;
}
