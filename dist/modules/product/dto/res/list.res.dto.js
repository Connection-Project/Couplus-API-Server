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
exports.ProductListFailDto = exports.ProductListSuccessDto = exports.ProductListObj = exports.ProductObj = void 0;
const swagger_1 = require("@nestjs/swagger");
class ProductObj {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ProductObj.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductObj.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductObj.prototype, "thumb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ProductObj.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ProductObj.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ProductObj.prototype, "detail", void 0);
exports.ProductObj = ProductObj;
class ProductListObj {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: ProductObj }),
    __metadata("design:type", Array)
], ProductListObj.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ProductListObj.prototype, "count", void 0);
exports.ProductListObj = ProductListObj;
class ProductListSuccessDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", Number)
], ProductListSuccessDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ProductListObj }),
    __metadata("design:type", ProductListObj)
], ProductListSuccessDto.prototype, "data", void 0);
exports.ProductListSuccessDto = ProductListSuccessDto;
class ProductListFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1101 }),
    __metadata("design:type", Number)
], ProductListFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], ProductListFailDto.prototype, "data", void 0);
exports.ProductListFailDto = ProductListFailDto;
//# sourceMappingURL=list.res.dto.js.map