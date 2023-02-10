import { Board } from './Board.entity';
import { BoardCommentReply } from './BoardCommentReply.entity';
import { User } from './User.entity';
export declare class BoardComment {
    id: number;
    content: string;
    board: Board;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    reply: BoardCommentReply[];
    constructor(partial: Partial<BoardComment>);
}
