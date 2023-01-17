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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const testCart_repository_1 = require("../../repositories/testCart.repository");
const testProduct_repository_1 = require("../../repositories/testProduct.repository");
let CartService = class CartService {
    constructor(testCartRepository, testProductRepository) {
        this.testCartRepository = testCartRepository;
        this.testProductRepository = testProductRepository;
    }
    async create(productId) {
        try {
            let status = 0;
            let resultCode = 0;
            const alreadyCart = await this.testCartRepository.findOneByProduct(productId);
            if (alreadyCart) {
                status = 201;
                resultCode = 1202;
            }
            else {
                const product = await this.testProductRepository.findOne(productId);
                const newCart = this.testCartRepository.create(product);
                await this.testCartRepository.save(newCart);
                status = 200;
                resultCode = 1;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1201, data: null } };
        }
    }
    async getCars() {
        try {
            const cart = await this.testCartRepository.findAll();
            const items = [];
            for (let i = 0; i < cart.length; i++) {
                items[i] = {
                    cartId: cart[i].id,
                    thumb: cart[i].product.thumb,
                    productName: cart[i].product.productName,
                    price: cart[i].product.price,
                    quantity: cart[i].quantity,
                };
            }
            return { status: 200, data: { resultCode: 1, data: items } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1211, data: null } };
        }
    }
    async update(body) {
        try {
            const { cartId, plus } = body;
            const cart = await this.testCartRepository.findOneById(cartId);
            if (plus)
                cart.quantity += 1;
            else
                cart.quantity -= 1;
            await this.testCartRepository.save(cart);
            return { status: 200, data: { resultCode: 1, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1221, data: null } };
        }
    }
    async delete(cartId) {
        try {
            let status = 0;
            let resultCode = 0;
            const cart = await this.testCartRepository.findOneById(cartId);
            if (cart) {
                await this.testCartRepository.delete(cartId);
                status = 200;
                resultCode = 1;
            }
            else {
                status = 201;
                resultCode = 1232;
            }
            return { status: 200, data: { resultCode: 1, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1231, data: null } };
        }
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [testCart_repository_1.TestCartRepository,
        testProduct_repository_1.TestProductRepository])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map