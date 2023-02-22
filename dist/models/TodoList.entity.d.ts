import { Calendar } from './Calendar.entity';
export declare class ToDoList {
    id: number;
    content: string;
    calendar: Calendar;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<ToDoList>);
}
