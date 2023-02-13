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
exports.GetManyRandomUserFailDto = exports.GetManyRandomUserSuccessDto = exports.GetManyRandomUserSuccessItems = exports.GetManyRandomUserObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetManyRandomUserObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetManyRandomUserObj.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'null값이 넘어간다면 등록된 강아지가 한 마리도 없어서 예외처리 해주어야함',
    }),
    __metadata("design:type", String)
], GetManyRandomUserObj.prototype, "feed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetManyRandomUserObj.prototype, "image", void 0);
exports.GetManyRandomUserObj = GetManyRandomUserObj;
class GetManyRandomUserSuccessItems {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetManyRandomUserObj }),
    __metadata("design:type", Array)
], GetManyRandomUserSuccessItems.prototype, "items", void 0);
exports.GetManyRandomUserSuccessItems = GetManyRandomUserSuccessItems;
class GetManyRandomUserSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetManyRandomUserSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetManyRandomUserSuccessItems }),
    __metadata("design:type", GetManyRandomUserSuccessItems)
], GetManyRandomUserSuccessDto.prototype, "data", void 0);
exports.GetManyRandomUserSuccessDto = GetManyRandomUserSuccessDto;
class GetManyRandomUserFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1041 }),
    __metadata("design:type", Number)
], GetManyRandomUserFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetManyRandomUserFailDto.prototype, "data", void 0);
exports.GetManyRandomUserFailDto = GetManyRandomUserFailDto;
//# sourceMappingURL=getManyRandom.res.dto.js.map