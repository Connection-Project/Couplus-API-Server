export declare class UpdateBoardReqDto {
    boardId: number;
    type: string;
    title: string;
    content: string;
    deleteImages: string[];
    board?: File[];
}
