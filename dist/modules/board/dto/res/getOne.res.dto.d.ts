export declare class GetOneBoardObj {
    boardId: number;
    writer: string;
    title: string;
    content: string;
    images: string[];
    createdAt: string;
}
export declare class GetOneBoardSuccessDto {
    resultCode: number;
    data: GetOneBoardObj;
}
export declare class GetOneBoardFailDto {
    resultCode: number;
    data: any;
}
