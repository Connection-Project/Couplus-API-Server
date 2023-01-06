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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const testProduct_repository_1 = require("../../repositories/testProduct.repository");
let ProductService = class ProductService {
    constructor(testProductRepository) {
        this.testProductRepository = testProductRepository;
    }
    async getProducts() {
        try {
            const [row, count] = await this.testProductRepository.findAll();
            const items = [];
            for (let i = 0; i < row.length; i++) {
                items[i] = {
                    id: row[i].id,
                    productName: row[i].productName,
                    thumb: row[i].thumb,
                    price: row[i].price,
                    rating: row[i].raing,
                    detail: row[i].detail,
                };
            }
            return { status: 1, data: { resultCode: 1, data: { items: items, count: count } } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1101, data: null } };
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [testProduct_repository_1.TestProductRepository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map