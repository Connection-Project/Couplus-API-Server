import { BoardComment } from './BoardComment.entity';
import { User } from './User.entity';
export declare class BoardCommentReply {
    id: number;
    content: string;
    comment: BoardComment;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<BoardCommentReply>);
}
