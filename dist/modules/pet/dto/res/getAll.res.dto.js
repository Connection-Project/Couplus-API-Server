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
exports.GetMyPetsFailDto = exports.GetMyPetsSuccessDto = exports.GetMyPetItems = exports.GetMyPetsObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetMyPetsObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetMyPetsObj.prototype, "myPetId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetMyPetsObj.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetMyPetsObj.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetMyPetsObj.prototype, "breed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetMyPetsObj.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetMyPetsObj.prototype, "birthDay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetMyPetsObj.prototype, "togetherDay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetMyPetsObj.prototype, "imagePath", void 0);
exports.GetMyPetsObj = GetMyPetsObj;
class GetMyPetItems {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetMyPetsObj }),
    __metadata("design:type", Array)
], GetMyPetItems.prototype, "items", void 0);
exports.GetMyPetItems = GetMyPetItems;
class GetMyPetsSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetMyPetsSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetMyPetsObj }),
    __metadata("design:type", GetMyPetsObj)
], GetMyPetsSuccessDto.prototype, "data", void 0);
exports.GetMyPetsSuccessDto = GetMyPetsSuccessDto;
class GetMyPetsFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1311 }),
    __metadata("design:type", Number)
], GetMyPetsFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetMyPetsFailDto.prototype, "data", void 0);
exports.GetMyPetsFailDto = GetMyPetsFailDto;
//# sourceMappingURL=getAll.res.dto.js.map