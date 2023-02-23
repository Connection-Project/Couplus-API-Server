import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToDoList } from 'src/models/TodoList.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ToDoListRepository {
    constructor(
        @InjectRepository(ToDoList)
        private todoListRepository: Repository<ToDoList>,
    ) {}

    create(): ToDoList {
        const todoList: ToDoList = this.todoListRepository.create();
        return todoList;
    }

    async save(todoList: ToDoList): Promise<void> {
        await this.todoListRepository.save(todoList);
        return;
    }

    async findOneByIdAndUserId(userId: number, todoId: number): Promise<ToDoList> {
        return await this.todoListRepository
            .createQueryBuilder('tl')
            .innerJoinAndSelect('tl.user', 'u')
            .innerJoinAndSelect('tl.calendar', 'ca')
            .where('tl.id = :todoId', { todoId: todoId })
            .andWhere('u.id = :userId', { userId: userId })
            .getOne();
    }

    async getAllByUserId(userId: number): Promise<ToDoList[]> {
        return await this.todoListRepository
            .createQueryBuilder('tl')
            .innerJoinAndSelect('tl.user', 'u')
            .innerJoinAndSelect('tl.calendar', 'ca')
            .where('u.id = :userId', { userId: userId })
            .getMany();
    }

    async getAllByDate(userId: number, date: string): Promise<ToDoList[]> {
        return await this.todoListRepository
            .createQueryBuilder('tl')
            .innerJoinAndSelect('tl.user', 'u')
            .innerJoinAndSelect('tl.calendar', 'ca')
            .where('tl.date = :date', { date: date })
            .andWhere('u.id = :userId', { userId: userId })
            .getMany();
    }

    async delete(userId: number, todoId: number): Promise<void> {
        await this.todoListRepository
            .createQueryBuilder('tl')
            .delete()
            .where('id = :todoId', { todoId: todoId })
            .andWhere('userId = :userId', { userId: userId })
            .execute();
        return;
    }
}
