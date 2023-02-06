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
exports.CreateBoardLikedFailDto = exports.CreateBoardLikedSuccessDto = exports.CreateBoardLikedObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateBoardLikedObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateBoardLikedObj.prototype, "liked", void 0);
exports.CreateBoardLikedObj = CreateBoardLikedObj;
class CreateBoardLikedSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], CreateBoardLikedSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CreateBoardLikedObj }),
    __metadata("design:type", CreateBoardLikedObj)
], CreateBoardLikedSuccessDto.prototype, "data", void 0);
exports.CreateBoardLikedSuccessDto = CreateBoardLikedSuccessDto;
class CreateBoardLikedFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1441 }),
    __metadata("design:type", Number)
], CreateBoardLikedFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], CreateBoardLikedFailDto.prototype, "data", void 0);
exports.CreateBoardLikedFailDto = CreateBoardLikedFailDto;
//# sourceMappingURL=createLiked.res.dto.js.map