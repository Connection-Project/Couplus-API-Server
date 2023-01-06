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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const result_res_dto_1 = require("../common/dto/res/result.res.dto");
const list_res_dto_1 = require("./dto/res/list.res.dto");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async getProducts() {
        return await this.productService.getProducts();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '상품 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: list_res_dto_1.ProductListSuccessDto, description: '상품 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: result_res_dto_1.ResultFailDto, description: '요청 값 에러' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: list_res_dto_1.ProductListFailDto, description: '상품 리스트 실패' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
ProductController = __decorate([
    (0, swagger_1.ApiTags)('상품 조회'),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map