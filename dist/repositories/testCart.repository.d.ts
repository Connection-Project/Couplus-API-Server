import { TestCart } from 'src/models/TestCart.entity';
import { TestProduct } from 'src/models/TestProduct.entity';
import { Repository } from 'typeorm';
export declare class TestCartRepository {
    private testCartRepository;
    constructor(testCartRepository: Repository<TestCart>);
    create(product: TestProduct): TestCart;
    findOne(productId: number): Promise<TestCart>;
    findAll(): Promise<TestCart[]>;
    delete(cartId: number): Promise<void>;
    save(cart: TestCart): Promise<void>;
}
