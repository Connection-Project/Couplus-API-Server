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
exports.TestProduct = void 0;
const typeorm_1 = require("typeorm");
const TestCart_entity_1 = require("./TestCart.entity");
let TestProduct = class TestProduct {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TestProduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TestProduct.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], TestProduct.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TestProduct.prototype, "summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 3000 }),
    __metadata("design:type", String)
], TestProduct.prototype, "detail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', default: 0 }),
    __metadata("design:type", Number)
], TestProduct.prototype, "raing", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TestProduct.prototype, "thumb", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], TestProduct.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], TestProduct.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TestCart_entity_1.TestCart, (cart) => cart.product, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", TestCart_entity_1.TestCart)
], TestProduct.prototype, "cart", void 0);
TestProduct = __decorate([
    (0, typeorm_1.Entity)({ name: 'TestProducts' }),
    __metadata("design:paramtypes", [Object])
], TestProduct);
exports.TestProduct = TestProduct;
//# sourceMappingURL=TestProduct.entity.js.map