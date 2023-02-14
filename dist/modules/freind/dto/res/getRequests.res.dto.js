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
exports.GetRequestFreindFailDto = exports.GetRequestFreindSuccessDto = exports.GetRequestFreindSuccessItems = exports.GetReuestFreindsObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetReuestFreindsObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetReuestFreindsObj.prototype, "freindId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetReuestFreindsObj.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetReuestFreindsObj.prototype, "nickName", void 0);
exports.GetReuestFreindsObj = GetReuestFreindsObj;
class GetRequestFreindSuccessItems {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetReuestFreindsObj }),
    __metadata("design:type", Array)
], GetRequestFreindSuccessItems.prototype, "items", void 0);
exports.GetRequestFreindSuccessItems = GetRequestFreindSuccessItems;
class GetRequestFreindSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], GetRequestFreindSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GetRequestFreindSuccessItems }),
    __metadata("design:type", GetRequestFreindSuccessItems)
], GetRequestFreindSuccessDto.prototype, "data", void 0);
exports.GetRequestFreindSuccessDto = GetRequestFreindSuccessDto;
class GetRequestFreindFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1721 }),
    __metadata("design:type", Number)
], GetRequestFreindFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], GetRequestFreindFailDto.prototype, "data", void 0);
exports.GetRequestFreindFailDto = GetRequestFreindFailDto;
//# sourceMappingURL=getRequests.res.dto.js.map