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
exports.GetRequestfriendFailDto = exports.GetRequestfriendSuccessDto = exports.GetRequestfriendSuccessItems = exports.GetReuestfriendsObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetReuestfriendsObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetReuestfriendsObj.prototype, "friendId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetReuestfriendsObj.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetReuestfriendsObj.prototype, "nickName", void 0);
exports.GetReuestfriendsObj = GetReuestfriendsObj;
class GetRequestfriendSuccessItems {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetReuestfriendsObj }),
    __metadata("design:type", Array)
], GetRequestfriendSuccessItems.prototype, "items", void 0);
exports.GetRequestfriendSuccessItems = GetRequestfriendSuccessItems;
class GetRequestfriendSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetRequestfriendSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetRequestfriendSuccessItems }),
    __metadata("design:type", GetRequestfriendSuccessItems)
], GetRequestfriendSuccessDto.prototype, "data", void 0);
exports.GetRequestfriendSuccessDto = GetRequestfriendSuccessDto;
class GetRequestfriendFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1721 }),
    __metadata("design:type", Number)
], GetRequestfriendFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetRequestfriendFailDto.prototype, "data", void 0);
exports.GetRequestfriendFailDto = GetRequestfriendFailDto;
//# sourceMappingURL=getRequests.res.dto.js.map