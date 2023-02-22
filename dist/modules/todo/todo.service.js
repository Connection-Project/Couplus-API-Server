"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const myPet_repository_1 = require("../../repositories/myPet.repository");
const todolist_respository_1 = require("../../repositories/todolist.respository");
const user_repository_1 = require("../../repositories/user.repository");
let TodoService = class TodoService {
    constructor(userRepository, todoListRepository, myPetRepository) {
        this.userRepository = userRepository;
        this.todoListRepository = todoListRepository;
        this.myPetRepository = myPetRepository;
    }
    async create(userId, body) {
        try {
            const { date, content } = body;
            const user = await this.userRepository.findByKey('id', userId);
            const todo = this.todoListRepository.create();
            todo.date = date;
            todo.content = content;
            todo.user = user;
            await this.todoListRepository.save(todo);
            return { data: { resultCode: 1, data: null } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 2001, data: null } };
        }
    }
    async getTodoList(userId, year, month) {
        try {
            const date = year + (parseInt(month) < 10 ? '0' + parseInt(month) : month);
            const todoList = await this.todoListRepository.findAllByDateAndUserId(userId, date);
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
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 2011, data: null } };
        }
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        todolist_respository_1.ToDoListRepository,
        myPet_repository_1.MyPetRepository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map