import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestProduct } from 'src/models/TestProduct.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestProductRepository {
    constructor(
        @InjectRepository(TestProduct)
        private testProductRepository: Repository<TestProduct>,
    ) {}

    async findAll(): Promise<[TestProduct[], number]> {
        const query = this.testProductRepository.createQueryBuilder('tp');
        return await query.getManyAndCount();
    }

    async findOne(productId: number): Promise<TestProduct> {
        return await this.testProductRepository
            .createQueryBuilder('tp')
            .where('tp.id = :productId', { productId: productId })
            .getOne();
    }
}
