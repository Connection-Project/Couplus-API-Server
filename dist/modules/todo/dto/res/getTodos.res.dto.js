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
exports.GetToDoListFailDto = exports.GetToDoListSuccessDto = exports.GetToDoListItems = exports.GetToDoListObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetToDoListObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetToDoListObj.prototype, "todoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetToDoListObj.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetToDoListObj.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetToDoListObj.prototype, "status", void 0);
exports.GetToDoListObj = GetToDoListObj;
class GetToDoListItems {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [GetToDoListObj] }),
    __metadata("design:type", GetToDoListObj)
], GetToDoListItems.prototype, "items", void 0);
exports.GetToDoListItems = GetToDoListItems;
class GetToDoListSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetToDoListSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetToDoListItems }),
    __metadata("design:type", GetToDoListItems)
], GetToDoListSuccessDto.prototype, "data", void 0);
exports.GetToDoListSuccessDto = GetToDoListSuccessDto;
class GetToDoListFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 2011 }),
    __metadata("design:type", Number)
], GetToDoListFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetToDoListFailDto.prototype, "data", void 0);
exports.GetToDoListFailDto = GetToDoListFailDto;
//# sourceMappingURL=getTodos.res.dto.js.map