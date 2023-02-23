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
exports.GetTodoFailDto = exports.GetTodoSuccessDto = exports.GetTodoItems = exports.GetTodoObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetTodoObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetTodoObj.prototype, "todoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetTodoObj.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetTodoObj.prototype, "status", void 0);
exports.GetTodoObj = GetTodoObj;
class GetTodoItems {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [GetTodoObj] }),
    __metadata("design:type", Array)
], GetTodoItems.prototype, "items", void 0);
exports.GetTodoItems = GetTodoItems;
class GetTodoSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetTodoSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetTodoItems }),
    __metadata("design:type", GetTodoItems)
], GetTodoSuccessDto.prototype, "data", void 0);
exports.GetTodoSuccessDto = GetTodoSuccessDto;
class GetTodoFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 2021 }),
    __metadata("design:type", Number)
], GetTodoFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetTodoFailDto.prototype, "data", void 0);
exports.GetTodoFailDto = GetTodoFailDto;
//# sourceMappingURL=getTodo.res.dto.js.map