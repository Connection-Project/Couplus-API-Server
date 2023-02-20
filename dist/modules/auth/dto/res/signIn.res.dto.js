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
exports.SocialSignInFailDto = exports.NotFoundSocialUserDto = exports.EmailSignInFailDto = exports.InvalidPasswordDto = exports.NotFoundUserDto = exports.SignInSuccessDto = exports.NotFoundSocialUserObj = exports.SignInSuccessObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class SignInSuccessObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignInSuccessObj.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], SignInSuccessObj.prototype, "accessTokenExpireIn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SignInSuccessObj.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], SignInSuccessObj.prototype, "refreshTokenExpireIn", void 0);
exports.SignInSuccessObj = SignInSuccessObj;
class NotFoundSocialUserObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], NotFoundSocialUserObj.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], NotFoundSocialUserObj.prototype, "nickName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], NotFoundSocialUserObj.prototype, "email", void 0);
exports.NotFoundSocialUserObj = NotFoundSocialUserObj;
class SignInSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], SignInSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: SignInSuccessObj }),
    __metadata("design:type", SignInSuccessObj)
], SignInSuccessDto.prototype, "data", void 0);
exports.SignInSuccessDto = SignInSuccessDto;
class NotFoundUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1102 }),
    __metadata("design:type", Number)
], NotFoundUserDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], NotFoundUserDto.prototype, "data", void 0);
exports.NotFoundUserDto = NotFoundUserDto;
class InvalidPasswordDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1103 }),
    __metadata("design:type", Number)
], InvalidPasswordDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], InvalidPasswordDto.prototype, "data", void 0);
exports.InvalidPasswordDto = InvalidPasswordDto;
class EmailSignInFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1101 }),
    __metadata("design:type", Number)
], EmailSignInFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], EmailSignInFailDto.prototype, "data", void 0);
exports.EmailSignInFailDto = EmailSignInFailDto;
class NotFoundSocialUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1112 }),
    __metadata("design:type", Number)
], NotFoundSocialUserDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: NotFoundSocialUserObj }),
    __metadata("design:type", NotFoundSocialUserObj)
], NotFoundSocialUserDto.prototype, "data", void 0);
exports.NotFoundSocialUserDto = NotFoundSocialUserDto;
class SocialSignInFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1111 }),
    __metadata("design:type", Number)
], SocialSignInFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], SocialSignInFailDto.prototype, "data", void 0);
exports.SocialSignInFailDto = SocialSignInFailDto;
//# sourceMappingURL=signIn.res.dto.js.map