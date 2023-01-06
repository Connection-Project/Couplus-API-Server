import { TestProduct } from 'src/models/TestProduct.entity';
import { Repository } from 'typeorm';
export declare class TestProductRepository {
    private testProductRepository;
    constructor(testProductRepository: Repository<TestProduct>);
    findAll(): Promise<[TestProduct[], number]>;
}
