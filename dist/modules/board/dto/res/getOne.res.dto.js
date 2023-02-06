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
exports.GetOneBoardFailDto = exports.GetOneBoardSuccessDto = exports.GetOneBoardObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetOneBoardObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetOneBoardObj.prototype, "boardId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneBoardObj.prototype, "writer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneBoardObj.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneBoardObj.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneBoardObj.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], GetOneBoardObj.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], GetOneBoardObj.prototype, "liked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetOneBoardObj.prototype, "likedCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetOneBoardObj.prototype, "commentCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneBoardObj.prototype, "createdAt", void 0);
exports.GetOneBoardObj = GetOneBoardObj;
class GetOneBoardSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetOneBoardSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetOneBoardObj }),
    __metadata("design:type", GetOneBoardObj)
], GetOneBoardSuccessDto.prototype, "data", void 0);
exports.GetOneBoardSuccessDto = GetOneBoardSuccessDto;
class GetOneBoardFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1421 }),
    __metadata("design:type", Number)
], GetOneBoardFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetOneBoardFailDto.prototype, "data", void 0);
exports.GetOneBoardFailDto = GetOneBoardFailDto;
//# sourceMappingURL=getOne.res.dto.js.map