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
exports.DeleteFeedCommentFailDto = exports.NotFoundFeedDeleteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class NotFoundFeedDeleteDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1932 }),
    __metadata("design:type", Number)
], NotFoundFeedDeleteDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], NotFoundFeedDeleteDto.prototype, "data", void 0);
exports.NotFoundFeedDeleteDto = NotFoundFeedDeleteDto;
class DeleteFeedCommentFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1931 }),
    __metadata("design:type", Number)
], DeleteFeedCommentFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], DeleteFeedCommentFailDto.prototype, "data", void 0);
exports.DeleteFeedCommentFailDto = DeleteFeedCommentFailDto;
//# sourceMappingURL=delete.res.dto.js.map