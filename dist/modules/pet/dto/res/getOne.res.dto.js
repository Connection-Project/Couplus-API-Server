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
exports.GetOneMyPetFailDto = exports.GetOneMyPetSuccessDto = exports.GetOneMyPetObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetOneMyPetObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetOneMyPetObj.prototype, "myPetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneMyPetObj.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneMyPetObj.prototype, "breed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneMyPetObj.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneMyPetObj.prototype, "imagePath", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneMyPetObj.prototype, "birthYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneMyPetObj.prototype, "birthMonth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneMyPetObj.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneMyPetObj.prototype, "togetherYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneMyPetObj.prototype, "togetherMonth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOneMyPetObj.prototype, "togetherDate", void 0);
exports.GetOneMyPetObj = GetOneMyPetObj;
class GetOneMyPetSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetOneMyPetSuccessDto.prototype, "resultCode", void 0);
exports.GetOneMyPetSuccessDto = GetOneMyPetSuccessDto;
class GetOneMyPetFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1341 }),
    __metadata("design:type", Number)
], GetOneMyPetFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetOneMyPetFailDto.prototype, "data", void 0);
exports.GetOneMyPetFailDto = GetOneMyPetFailDto;
//# sourceMappingURL=getOne.res.dto.js.map