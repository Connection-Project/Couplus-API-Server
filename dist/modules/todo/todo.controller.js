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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const getUser_decorator_1 = require("../../decorator/getUser.decorator");
const accessToken_guard_1 = require("../../lib/jwt/guards/accessToken.guard");
const result_res_dto_1 = require("../common/dto/res/result.res.dto");
const create_req_dto_1 = require("./dto/req/create.req.dto");
const update_req_dto_1 = require("./dto/req/update.req.dto");
const _create_res_dto_1 = require("./dto/res/\bcreate.res.dto");
const delete_res_dto_1 = require("./dto/res/delete.res.dto");
const getTodo_res_dto_1 = require("./dto/res/getTodo.res.dto");
const getTodos_res_dto_1 = require("./dto/res/getTodos.res.dto");
const update_res_dto_1 = require("./dto/res/update.res.dto");
const todo_service_1 = require("./todo.service");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async create(userId, body) {
        return await this.todoService.create(userId, body);
    }
    async getTodoList(userId, year, month) {
        return await this.todoService.getTodoList(userId, year, month);
    }
    async getTodo(userId, date) {
        return await this.todoService.getTodo(userId, date);
    }
    async update(userId, todoId, body) {
        return await this.todoService.update(userId, todoId, body);
    }
    async delete(userId, todoId) {
        return await this.todoService.delete(userId, todoId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '일정 등록' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '일정 등록 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: _create_res_dto_1.CreateTodoFailDto, description: '일정 등록 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_req_dto_1.CreateToDoReqDto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '년월 일정 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getTodos_res_dto_1.GetToDoListSuccessDto, description: '년월 일정 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getTodos_res_dto_1.GetToDoListFailDto, description: '년월 일정 리스트 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)('year')),
    __param(2, (0, common_1.Query)('month')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodoList", null);
__decorate([
    (0, common_1.Get)('date'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '해당 일 일정 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getTodo_res_dto_1.GetTodoSuccessDto, description: '해당 일 일정 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getTodo_res_dto_1.GetTodoFailDto, description: '해당 일 일정 리스트 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodo", null);
__decorate([
    (0, common_1.Patch)(':todoId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '일정 수정' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '일정 수정 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: update_res_dto_1.UpdateTodoFailDto, description: '일정 수정 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('todoId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_req_dto_1.UpdateTodoReqDto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':todoId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '일정 삭제' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '일정 삭제 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: delete_res_dto_1.DeleteTodoFailDto, description: '일정 삭제 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('todoId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "delete", null);
TodoController = __decorate([
    (0, swagger_1.ApiTags)('일정 관리'),
    (0, common_1.Controller)('todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map