import { BoardComment } from './BoardComment.entity';
import { Board } from './Board.entity';
import { MyPet } from './MyPets.entity';
import { BoardCommentReply } from './BoardCommentReply.entity';
import { Feed } from './Feed.entity';
import { FeedComment } from './FeedComment.entity';
import { Calendar } from './Calendar.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    name: string;
    nickName: string;
    phone: string;
    accountId: string;
    registType: string;
    imageKey: string;
    imagePath: string;
    createdAt: Date;
    updatedAt: Date;
    pet: MyPet[];
    board: Board[];
    comment: BoardComment[];
    reply: BoardCommentReply[];
    feed: Feed[];
    feedComment: FeedComment[];
    calendar: Calendar[];
    constructor(partial: Partial<User>);
}
