import { Board } from 'src/models/Board.entity';
import { User } from 'src/models/User.entity';
export declare class BoardLiked {
    userId: number;
    boardId: number;
    user: User;
    board: Board;
    constructor(partial: Partial<BoardLiked>);
}
