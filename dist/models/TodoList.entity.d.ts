import { User } from './User.entity';
export declare enum ToDoStatus {
    todo = "todo",
    done = "done"
}
export declare class ToDoList {
    id: number;
    content: string;
    status: ToDoStatus;
    date: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<ToDoList>);
}
