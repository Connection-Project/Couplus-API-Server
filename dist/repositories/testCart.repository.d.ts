import { TestCart } from 'src/models/TestCart.entity';
import { Repository } from 'typeorm';
export declare class TestCartRepository {
    private testCartRepository;
    constructor(testCartRepository: Repository<TestCart>);
}
