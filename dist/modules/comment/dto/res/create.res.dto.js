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
exports.CreateBoardCommentFailDto = exports.NotFoundBoardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class NotFoundBoardDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1502 }),
    __metadata("design:type", Number)
], NotFoundBoardDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], NotFoundBoardDto.prototype, "data", void 0);
exports.NotFoundBoardDto = NotFoundBoardDto;
class CreateBoardCommentFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1501 }),
    __metadata("design:type", Number)
], CreateBoardCommentFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], CreateBoardCommentFailDto.prototype, "data", void 0);
exports.CreateBoardCommentFailDto = CreateBoardCommentFailDto;
//# sourceMappingURL=create.res.dto.js.map