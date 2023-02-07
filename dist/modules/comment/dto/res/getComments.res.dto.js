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
exports.GetBoardCommentsSuccessDto = exports.GetBoardCommentsDataObj = exports.GetBoardCommentsObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetBoardCommentsObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetBoardCommentsObj.prototype, "commentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetBoardCommentsObj.prototype, "wirter", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetBoardCommentsObj.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], GetBoardCommentsObj.prototype, "mine", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetBoardCommentsObj.prototype, "createdAt", void 0);
exports.GetBoardCommentsObj = GetBoardCommentsObj;
class GetBoardCommentsDataObj {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetBoardCommentsObj }),
    __metadata("design:type", GetBoardCommentsObj)
], GetBoardCommentsDataObj.prototype, "items", void 0);
exports.GetBoardCommentsDataObj = GetBoardCommentsDataObj;
class GetBoardCommentsSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetBoardCommentsSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetBoardCommentsDataObj }),
    __metadata("design:type", GetBoardCommentsDataObj)
], GetBoardCommentsSuccessDto.prototype, "data", void 0);
exports.GetBoardCommentsSuccessDto = GetBoardCommentsSuccessDto;
//# sourceMappingURL=getComments.res.dto.js.map