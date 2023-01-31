import { BoardComment } from './BoardComment.entity';
import { BoardImage } from './BoardImage.entity';
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
    image: BoardImage[];
    constructor(partial: Partial<Board>);
}
