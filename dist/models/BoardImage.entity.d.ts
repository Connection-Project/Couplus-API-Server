import { Board } from './Board.entity';
export declare class BoardImage {
    id: number;
    originalName: string;
    path: string;
    board: Board;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<BoardImage>);
}
