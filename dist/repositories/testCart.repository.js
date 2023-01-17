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
exports.TestCartRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const TestCart_entity_1 = require("../models/TestCart.entity");
const typeorm_2 = require("typeorm");
let TestCartRepository = class TestCartRepository {
    constructor(testCartRepository) {
        this.testCartRepository = testCartRepository;
    }
    create(product) {
        const cart = this.testCartRepository.create();
        cart.product = product;
        return cart;
    }
    async findOneByProduct(productId) {
        return await this.testCartRepository
            .createQueryBuilder('tc')
            .innerJoinAndSelect('tc.product', 'tp')
            .where('tp.id = :productId', { productId: productId })
            .getOne();
    }
    async findOneById(cartId) {
        return await this.testCartRepository
            .createQueryBuilder('tc')
            .where('tc.id = :cartId', { cartId: cartId })
            .getOne();
    }
    async findAll() {
        return await this.testCartRepository
            .createQueryBuilder('tc')
            .innerJoinAndSelect('tc.product', 'tp')
            .getMany();
    }
    async delete(cartId) {
        await this.testCartRepository
            .createQueryBuilder('tc')
            .delete()
            .where('tc.id = :cartId', { cartId: cartId })
            .execute();
    }
    async save(cart) {
        await this.testCartRepository.save(cart);
    }
};
TestCartRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(TestCart_entity_1.TestCart)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TestCartRepository);
exports.TestCartRepository = TestCartRepository;
//# sourceMappingURL=testCart.repository.js.map