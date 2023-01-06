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
exports.TestCart = void 0;
const TestProduct_entity_1 = require("./TestProduct.entity");
const typeorm_1 = require("typeorm");
let TestCart = class TestCart {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TestCart.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TestProduct_entity_1.TestProduct, (product) => product.cart, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", TestProduct_entity_1.TestProduct)
], TestCart.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], TestCart.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], TestCart.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], TestCart.prototype, "updatedAt", void 0);
TestCart = __decorate([
    (0, typeorm_1.Entity)({ name: 'TestCarts' }),
    __metadata("design:paramtypes", [Object])
], TestCart);
exports.TestCart = TestCart;
//# sourceMappingURL=TestCart.entity.js.map