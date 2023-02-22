import { ToDoList } from 'src/models/TodoList.entity';
import { Repository } from 'typeorm';
export declare class ToDoListRepository {
    private todoListRepository;
    constructor(todoListRepository: Repository<ToDoList>);
    create(): ToDoList;
    save(todoList: ToDoList): Promise<void>;
    findOneByIdAndUserId(userId: number, todoId: number): Promise<ToDoList>;
    findAllByDateAndUserId(userId: number, date: string): Promise<ToDoList[]>;
    delete(todoId: number): Promise<void>;
}
