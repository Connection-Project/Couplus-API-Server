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
exports.GetInfoFailDto = exports.GetInfoSuccessDto = exports.GetInfoObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetInfoObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetInfoObj.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetInfoObj.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetInfoObj.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetInfoObj.prototype, "nickName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetInfoObj.prototype, "registType", void 0);
exports.GetInfoObj = GetInfoObj;
class GetInfoSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetInfoSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetInfoObj }),
    __metadata("design:type", GetInfoObj)
], GetInfoSuccessDto.prototype, "data", void 0);
exports.GetInfoSuccessDto = GetInfoSuccessDto;
class GetInfoFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1011 }),
    __metadata("design:type", Number)
], GetInfoFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetInfoFailDto.prototype, "data", void 0);
exports.GetInfoFailDto = GetInfoFailDto;
//# sourceMappingURL=getInfo.res.dto.js.map