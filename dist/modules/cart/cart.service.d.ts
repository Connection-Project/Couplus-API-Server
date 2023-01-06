import { TestCartRepository } from 'src/repositories/testCart.repository';
import { TestProductRepository } from 'src/repositories/testProduct.repository';
export declare class CartService {
    private readonly testCartRepository;
    private readonly testProductRepository;
    constructor(testCartRepository: TestCartRepository, testProductRepository: TestProductRepository);
    create(productId: number): Promise<any>;
    getCars(): Promise<any>;
    update(cartId: number): Promise<any>;
    delete(cartId: number): Promise<any>;
}
