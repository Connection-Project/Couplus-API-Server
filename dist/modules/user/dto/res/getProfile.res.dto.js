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
exports.GetProfileFailDto = exports.GetProfileSuccessDto = exports.GetProfileObj = exports.MyPetsObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class MyPetsObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], MyPetsObj.prototype, "myPetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MyPetsObj.prototype, "breed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MyPetsObj.prototype, "name", void 0);
exports.MyPetsObj = MyPetsObj;
class GetProfileObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetProfileObj.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetProfileObj.prototype, "nickName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetProfileObj.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetProfileObj.prototype, "feedCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetProfileObj.prototype, "friendCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: MyPetsObj }),
    __metadata("design:type", Array)
], GetProfileObj.prototype, "myPets", void 0);
exports.GetProfileObj = GetProfileObj;
class GetProfileSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetProfileSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetProfileObj }),
    __metadata("design:type", GetProfileObj)
], GetProfileSuccessDto.prototype, "data", void 0);
exports.GetProfileSuccessDto = GetProfileSuccessDto;
class GetProfileFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1051 }),
    __metadata("design:type", Number)
], GetProfileFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetProfileFailDto.prototype, "data", void 0);
exports.GetProfileFailDto = GetProfileFailDto;
//# sourceMappingURL=getProfile.res.dto.js.map