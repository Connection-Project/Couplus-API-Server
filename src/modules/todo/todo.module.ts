import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/User.entity';
import { ToDoList } from 'src/models/TodoList.entity';
import { MyPet } from 'src/models/MyPets.entity';
import { UserRepository } from 'src/repositories/user.repository';
import { ToDoListRepository } from 'src/repositories/todolist.respository';
import { MyPetRepository } from 'src/repositories/myPet.repository';

@Module({
    imports: [TypeOrmModule.forFeature([User, ToDoList, MyPet])],
    providers: [TodoService, UserRepository, ToDoListRepository, MyPetRepository],
    controllers: [TodoController],
})
export class TodoModule {}
