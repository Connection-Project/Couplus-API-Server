import { BoardComment } from './BoardComment.entity';
import { Board } from './Board.entity';
import { MyPet } from './MyPets.entity';
import { BoardCommentReply } from './BoardCommentReply.entity';
import { Feed } from './Feed.entity';
import { FeedComment } from './FeedComment.entity';
import { ToDoList } from './TodoList.entity';
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
    todo: ToDoList[];
    constructor(partial: Partial<User>);
}
