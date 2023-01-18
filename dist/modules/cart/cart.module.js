"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const cart_controller_1 = require("./cart.controller");
const TestCart_entity_1 = require("../../models/TestCart.entity");
const testCart_repository_1 = require("../../repositories/testCart.repository");
const TestProduct_entity_1 = require("../../models/TestProduct.entity");
const testProduct_repository_1 = require("../../repositories/testProduct.repository");
let CartModule = class CartModule {
};
CartModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([TestCart_entity_1.TestCart, TestProduct_entity_1.TestProduct])],
        controllers: [cart_controller_1.CartController],
        providers: [cart_service_1.CartService, testCart_repository_1.TestCartRepository, testProduct_repository_1.TestProductRepository],
    })
], CartModule);
exports.CartModule = CartModule;
//# sourceMappingURL=cart.module.js.map