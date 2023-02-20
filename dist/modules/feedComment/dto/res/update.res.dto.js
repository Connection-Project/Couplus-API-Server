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
exports.UpdateFeedCommentFailDto = exports.NotFoundFeedUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class NotFoundFeedUpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1922 }),
    __metadata("design:type", Number)
], NotFoundFeedUpdateDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], NotFoundFeedUpdateDto.prototype, "data", void 0);
exports.NotFoundFeedUpdateDto = NotFoundFeedUpdateDto;
class UpdateFeedCommentFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1921 }),
    __metadata("design:type", Number)
], UpdateFeedCommentFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], UpdateFeedCommentFailDto.prototype, "data", void 0);
exports.UpdateFeedCommentFailDto = UpdateFeedCommentFailDto;
//# sourceMappingURL=update.res.dto.js.map