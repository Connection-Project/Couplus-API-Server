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
exports.DeleteBoardCommentReplyFailDto = exports.NotFoundReplyDeleteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class NotFoundReplyDeleteDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1632 }),
    __metadata("design:type", Number)
], NotFoundReplyDeleteDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], NotFoundReplyDeleteDto.prototype, "data", void 0);
exports.NotFoundReplyDeleteDto = NotFoundReplyDeleteDto;
class DeleteBoardCommentReplyFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1631 }),
    __metadata("design:type", Number)
], DeleteBoardCommentReplyFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], DeleteBoardCommentReplyFailDto.prototype, "data", void 0);
exports.DeleteBoardCommentReplyFailDto = DeleteBoardCommentReplyFailDto;
//# sourceMappingURL=delete.res.dto.js.map