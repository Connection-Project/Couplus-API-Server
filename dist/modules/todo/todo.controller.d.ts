import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateToDoReqDto } from './dto/req/create.req.dto';
import { UpdateTodoReqDto } from './dto/req/update.req.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    create(userId: number, body: CreateToDoReqDto): Promise<ReturnResDto>;
    getTodoList(userId: number): Promise<ReturnResDto>;
    getTodo(userId: number, date: string): Promise<ReturnResDto>;
    update(userId: number, todoId: number, body: UpdateTodoReqDto): Promise<ReturnResDto>;
    delete(userId: number, todoId: number): Promise<ReturnResDto>;
}
