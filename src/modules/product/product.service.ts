import { Injectable } from '@nestjs/common';
import { TestProductRepository } from 'src/repositories/testProduct.repository';

@Injectable()
export class ProductService {
    constructor(private readonly testProductRepository: TestProductRepository) {}

    async getProducts(): Promise<any> {
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
                    summary: row[i].summary,
                    detail: row[i].detail,
                };
            }
            return { status: 1, data: { resultCode: 1, data: { items: items, count: count } } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1101, data: null } };
        }
    }
}
