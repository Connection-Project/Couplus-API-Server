import { TestProduct } from './TestProduct.entity';
export declare class TestCart {
    id: number;
    product: TestProduct;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<TestCart>);
}
