import { TestCart } from './TestCart.entity';
export declare class TestProduct {
    id: number;
    productName: string;
    price: number;
    detail: string;
    raing: number;
    thumb: string;
    createdAt: Date;
    updatedAt: Date;
    cart: TestCart;
    constructor(partial: Partial<TestProduct>);
}
