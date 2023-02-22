import { ToDoList } from './TodoList.entity';
import { User } from './User.entity';
export declare class Calendar {
    id: number;
    date: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    todo: ToDoList[];
    constructor(partial: Partial<Calendar>);
}
