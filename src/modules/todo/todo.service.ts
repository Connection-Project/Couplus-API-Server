import { Injectable } from '@nestjs/common';
import { ToDoList } from 'src/models/TodoList.entity';
import { User } from 'src/models/User.entity';
import { MyPetRepository } from 'src/repositories/myPet.repository';
import { ToDoListRepository } from 'src/repositories/todolist.respository';
import { UserRepository } from 'src/repositories/user.repository';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateToDoReqDto } from './dto/req/create.req.dto';

@Injectable()
export class TodoService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly todoListRepository: ToDoListRepository,
        private readonly myPetRepository: MyPetRepository,
    ) {}

    async create(userId: number, body: CreateToDoReqDto): Promise<ReturnResDto> {
        try {
            const { date, content } = body;
            const user: User = await this.userRepository.findByKey('id', userId);
            // * 새로운 투두 생성
            const todo: ToDoList = this.todoListRepository.create();
            todo.date = date;
            todo.content = content;
            todo.user = user;
            await this.todoListRepository.save(todo);
            return { data: { resultCode: 1, data: null } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 2001, data: null } };
        }
    }

    async getTodoList(userId: number, year: string, month: string): Promise<ReturnResDto> {
        try {
            // * 년 월 계산
            const date = year + (parseInt(month) < 10 ? '0' + parseInt(month) : month);
            const todoList: ToDoList[] = await this.todoListRepository.findAllByDateAndUserId(userId, date);
            const items = [];
            for (let i = 0; i < todoList.length; i++) {
                items[i] = {
                    todoId: todoList[i].id,
                    content: todoList[i].content,
                    date: todoList[i].date,
                    status: todoList[i].status,
                };
            }
            return { data: { resultCode: 1, data: { items: items } } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 2011, data: null } };
        }
    }
}
