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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const result_res_dto_1 = require("../common/dto/res/result.res.dto");
const cart_service_1 = require("./cart.service");
const create_req_dto_1 = require("./dto/req/create.req.dto");
const update_req_dto_1 = require("./dto/req/update.req.dto");
const create_res_dto_1 = require("./dto/res/create.res.dto");
const delete_res_dto_1 = require("./dto/res/delete.res.dto");
const list_res_dto_1 = require("./dto/res/list.res.dto");
const update_res_dto_1 = require("./dto/res/update.res.dto");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async create(body) {
        return this.cartService.create(body.productId);
    }
    async getCarts() {
        return this.cartService.getCars();
    }
    async update(body) {
        return this.cartService.update(body);
    }
    async delete(cartId) {
        return this.cartService.delete(cartId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: '장바구니 추가' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '장바구니 추가 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: result_res_dto_1.ResultFailDto, description: '요청 값 에러' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: create_res_dto_1.CreateCartFailDto, description: '장바구니 추가 실패' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_req_dto_1.CreateCartReqDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '장바구니 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: list_res_dto_1.GetCartSuccessDto, description: '장바구니 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: result_res_dto_1.ResultFailDto, description: '요청 값 에러' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: list_res_dto_1.GetCartFailDto, description: '장바구니 리스트 실패' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getCarts", null);
__decorate([
    (0, common_1.Patch)(),
    (0, swagger_1.ApiOperation)({ summary: '장바구니 수량 수정' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '장바구니 수량 수정 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: result_res_dto_1.ResultFailDto, description: '요청 값 에러' }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        type: update_res_dto_1.UpdateCartQuantityUpdateFail,
        description: '장바구니 수량 수정 실패',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_req_dto_1.UpdateCartReqDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:cartId'),
    (0, swagger_1.ApiOperation)({ summary: '장바구니 품목 삭제' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '장바구니 품목 삭제 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: result_res_dto_1.ResultFailDto, description: '요청 값 에러' }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        type: delete_res_dto_1.DeleteCartItemFailDto,
        description: '장바구니 품목 삭제 실패',
    }),
    __param(0, (0, common_1.Param)('cartId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "delete", null);
CartController = __decorate([
    (0, swagger_1.ApiTags)('장바구니'),
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map