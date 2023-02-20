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
exports.GetFeedCommentsFailDto = exports.GetFeedCommentsSuccessDto = exports.GetFeedCommentsDataObj = exports.GetFeedCommentsObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetFeedCommentsObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetFeedCommentsObj.prototype, "commentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetFeedCommentsObj.prototype, "writer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetFeedCommentsObj.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], GetFeedCommentsObj.prototype, "mine", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetFeedCommentsObj.prototype, "createdAt", void 0);
exports.GetFeedCommentsObj = GetFeedCommentsObj;
class GetFeedCommentsDataObj {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [GetFeedCommentsObj] }),
    __metadata("design:type", Array)
], GetFeedCommentsDataObj.prototype, "items", void 0);
exports.GetFeedCommentsDataObj = GetFeedCommentsDataObj;
class GetFeedCommentsSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetFeedCommentsSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetFeedCommentsDataObj }),
    __metadata("design:type", GetFeedCommentsDataObj)
], GetFeedCommentsSuccessDto.prototype, "data", void 0);
exports.GetFeedCommentsSuccessDto = GetFeedCommentsSuccessDto;
class GetFeedCommentsFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1911 }),
    __metadata("design:type", Number)
], GetFeedCommentsFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetFeedCommentsFailDto.prototype, "data", void 0);
exports.GetFeedCommentsFailDto = GetFeedCommentsFailDto;
//# sourceMappingURL=getComments.res.dto.js.map