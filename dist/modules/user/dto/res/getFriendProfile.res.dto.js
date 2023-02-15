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
exports.GetFriendProfileFailDto = exports.GetFriendProfileSuccessDto = exports.GetFriendProfileObj = void 0;
const swagger_1 = require("@nestjs/swagger");
const getProfile_res_dto_1 = require("./getProfile.res.dto");
class GetFriendProfileObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetFriendProfileObj.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetFriendProfileObj.prototype, "nickName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetFriendProfileObj.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetFriendProfileObj.prototype, "feedCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetFriendProfileObj.prototype, "friendCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '-1 : 요청 중,  0 : 친구 추가x,  1 : 친구' }),
    __metadata("design:type", Number)
], GetFriendProfileObj.prototype, "friendStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: getProfile_res_dto_1.MyPetsObj }),
    __metadata("design:type", Array)
], GetFriendProfileObj.prototype, "myPets", void 0);
exports.GetFriendProfileObj = GetFriendProfileObj;
class GetFriendProfileSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetFriendProfileSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetFriendProfileObj }),
    __metadata("design:type", GetFriendProfileObj)
], GetFriendProfileSuccessDto.prototype, "data", void 0);
exports.GetFriendProfileSuccessDto = GetFriendProfileSuccessDto;
class GetFriendProfileFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1051 }),
    __metadata("design:type", Number)
], GetFriendProfileFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetFriendProfileFailDto.prototype, "data", void 0);
exports.GetFriendProfileFailDto = GetFriendProfileFailDto;
//# sourceMappingURL=getFriendProfile.res.dto.js.map