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
exports.RenewTokenFailDto = exports.RefreshTokenExpireDto = exports.RenewSuccessDto = exports.RenewSuccessObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class RenewSuccessObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RenewSuccessObj.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RenewSuccessObj.prototype, "refreshToken", void 0);
exports.RenewSuccessObj = RenewSuccessObj;
class RenewSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], RenewSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: RenewSuccessObj }),
    __metadata("design:type", RenewSuccessObj)
], RenewSuccessDto.prototype, "data", void 0);
exports.RenewSuccessDto = RenewSuccessDto;
class RefreshTokenExpireDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 9002 }),
    __metadata("design:type", Number)
], RefreshTokenExpireDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], RefreshTokenExpireDto.prototype, "data", void 0);
exports.RefreshTokenExpireDto = RefreshTokenExpireDto;
class RenewTokenFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 9001 }),
    __metadata("design:type", Number)
], RenewTokenFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], RenewTokenFailDto.prototype, "data", void 0);
exports.RenewTokenFailDto = RenewTokenFailDto;
//# sourceMappingURL=renew.res.dto.js.map