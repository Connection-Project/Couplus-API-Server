import { TestCartRepository } from 'src/repositories/testCart.repository';
import { TestProductRepository } from 'src/repositories/testProduct.repository';
import { UpdateCartReqDto } from './dto/req/update.req.dto';
export declare class CartService {
    private readonly testCartRepository;
    private readonly testProductRepository;
    constructor(testCartRepository: TestCartRepository, testProductRepository: TestProductRepository);
    create(productId: number): Promise<any>;
    getCars(): Promise<any>;
    update(body: UpdateCartReqDto): Promise<any>;
    delete(cartId: number): Promise<any>;
}
