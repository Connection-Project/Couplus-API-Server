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
exports.CreateFeedCommentFailDto = exports.NotFoundFeedCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class NotFoundFeedCreateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1902 }),
    __metadata("design:type", Number)
], NotFoundFeedCreateDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], NotFoundFeedCreateDto.prototype, "data", void 0);
exports.NotFoundFeedCreateDto = NotFoundFeedCreateDto;
class CreateFeedCommentFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1901 }),
    __metadata("design:type", Number)
], CreateFeedCommentFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], CreateFeedCommentFailDto.prototype, "data", void 0);
exports.CreateFeedCommentFailDto = CreateFeedCommentFailDto;
//# sourceMappingURL=create.res.dto.js.map