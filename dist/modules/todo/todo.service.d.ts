import { MyPetRepository } from 'src/repositories/myPet.repository';
import { ToDoListRepository } from 'src/repositories/todolist.respository';
import { UserRepository } from 'src/repositories/user.repository';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateToDoReqDto } from './dto/req/create.req.dto';
import { UpdateTodoReqDto } from './dto/req/update.req.dto';
export declare class TodoService {
    private readonly userRepository;
    private readonly todoListRepository;
    private readonly myPetRepository;
    constructor(userRepository: UserRepository, todoListRepository: ToDoListRepository, myPetRepository: MyPetRepository);
    create(userId: number, body: CreateToDoReqDto): Promise<ReturnResDto>;
    getTodoList(userId: number, year: string, month: string): Promise<ReturnResDto>;
    getTodo(userId: number, date: string): Promise<ReturnResDto>;
    update(userId: number, todoId: number, body: UpdateTodoReqDto): Promise<ReturnResDto>;
    delete(userId: number, todoId: number): Promise<ReturnResDto>;
}
