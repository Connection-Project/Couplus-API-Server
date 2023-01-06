import { TestProductRepository } from 'src/repositories/testProduct.repository';
export declare class ProductService {
    private readonly testProductRepository;
    constructor(testProductRepository: TestProductRepository);
    getProducts(): Promise<any>;
}
