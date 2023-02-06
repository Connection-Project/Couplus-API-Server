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
exports.GetManyBoardFailDto = exports.GetManyBoardSuccessDto = exports.GetManyBoardObj = exports.GetManyBoardItemObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetManyBoardItemObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetManyBoardItemObj.prototype, "boardId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetManyBoardItemObj.prototype, "writer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetManyBoardItemObj.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetManyBoardItemObj.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetManyBoardItemObj.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], GetManyBoardItemObj.prototype, "liked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetManyBoardItemObj.prototype, "likedCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetManyBoardItemObj.prototype, "commentCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetManyBoardItemObj.prototype, "createdAt", void 0);
exports.GetManyBoardItemObj = GetManyBoardItemObj;
class GetManyBoardObj {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetManyBoardItemObj }),
    __metadata("design:type", GetManyBoardItemObj)
], GetManyBoardObj.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetManyBoardObj.prototype, "count", void 0);
exports.GetManyBoardObj = GetManyBoardObj;
class GetManyBoardSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetManyBoardSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetManyBoardObj }),
    __metadata("design:type", GetManyBoardObj)
], GetManyBoardSuccessDto.prototype, "data", void 0);
exports.GetManyBoardSuccessDto = GetManyBoardSuccessDto;
class GetManyBoardFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1411 }),
    __metadata("design:type", Number)
], GetManyBoardFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetManyBoardFailDto.prototype, "data", void 0);
exports.GetManyBoardFailDto = GetManyBoardFailDto;
//# sourceMappingURL=getMany.res.dto.js.map