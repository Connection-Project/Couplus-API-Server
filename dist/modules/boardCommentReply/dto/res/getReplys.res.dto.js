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
exports.GetBoardCommentReplysFailDto = exports.GetBoardCommentsSuccessDto = exports.GetBoardCommentReplysDataObj = exports.GetBoardCommentReplyObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetBoardCommentReplyObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetBoardCommentReplyObj.prototype, "replyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetBoardCommentReplyObj.prototype, "writer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetBoardCommentReplyObj.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], GetBoardCommentReplyObj.prototype, "mine", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetBoardCommentReplyObj.prototype, "createdAt", void 0);
exports.GetBoardCommentReplyObj = GetBoardCommentReplyObj;
class GetBoardCommentReplysDataObj {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetBoardCommentReplyObj }),
    __metadata("design:type", GetBoardCommentReplyObj)
], GetBoardCommentReplysDataObj.prototype, "items", void 0);
exports.GetBoardCommentReplysDataObj = GetBoardCommentReplysDataObj;
class GetBoardCommentsSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetBoardCommentsSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetBoardCommentReplysDataObj }),
    __metadata("design:type", GetBoardCommentReplysDataObj)
], GetBoardCommentsSuccessDto.prototype, "data", void 0);
exports.GetBoardCommentsSuccessDto = GetBoardCommentsSuccessDto;
class GetBoardCommentReplysFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1611 }),
    __metadata("design:type", Number)
], GetBoardCommentReplysFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetBoardCommentReplysFailDto.prototype, "data", void 0);
exports.GetBoardCommentReplysFailDto = GetBoardCommentReplysFailDto;
//# sourceMappingURL=getReplys.res.dto.js.map