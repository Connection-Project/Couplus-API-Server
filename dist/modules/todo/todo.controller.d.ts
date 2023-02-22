import { CreateToDoReqDto } from './dto/req/create.req.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    create(userId: number, body: CreateToDoReqDto): Promise<import("../common/dto/return/return.res.dto").ReturnResDto>;
    getTodoList(userId: number, year: string, month: string): Promise<import("../common/dto/return/return.res.dto").ReturnResDto>;
}
