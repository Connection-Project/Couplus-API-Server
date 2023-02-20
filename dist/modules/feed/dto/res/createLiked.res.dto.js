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
exports.CreateFeedLikedFailDto = exports.CreateFeedLikedSuccessDto = exports.CreateFeedLikedObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateFeedLikedObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateFeedLikedObj.prototype, "liked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateFeedLikedObj.prototype, "likedCount", void 0);
exports.CreateFeedLikedObj = CreateFeedLikedObj;
class CreateFeedLikedSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], CreateFeedLikedSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CreateFeedLikedObj }),
    __metadata("design:type", CreateFeedLikedObj)
], CreateFeedLikedSuccessDto.prototype, "data", void 0);
exports.CreateFeedLikedSuccessDto = CreateFeedLikedSuccessDto;
class CreateFeedLikedFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1851 }),
    __metadata("design:type", Number)
], CreateFeedLikedFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], CreateFeedLikedFailDto.prototype, "data", void 0);
exports.CreateFeedLikedFailDto = CreateFeedLikedFailDto;
//# sourceMappingURL=createLiked.res.dto.js.map