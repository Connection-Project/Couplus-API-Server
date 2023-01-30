import { BoardComment } from './BoardComment.entity';
import { User } from './User.entity';
export declare class Board {
    id: number;
    title: string;
    content: string;
    type: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    comment: BoardComment[];
    constructor(partial: Partial<Board>);
}
