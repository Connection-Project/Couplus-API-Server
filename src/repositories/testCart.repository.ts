import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestCart } from 'src/models/TestCart.entity';
import { TestProduct } from 'src/models/TestProduct.entity';
import { CreateCartTypes } from 'src/modules/cart/types/create.types';
import { DeleteCartTypes } from 'src/modules/cart/types/delete.types';
import { Repository } from 'typeorm';

@Injectable()
export class TestCartRepository {
    constructor(
        @InjectRepository(TestCart)
        private testCartRepository: Repository<TestCart>,
    ) {}

    create(product: TestProduct): TestCart {
        const cart: TestCart = this.testCartRepository.create();
        cart.product = product;
        return cart;
    }

    async findOneByProduct(productId: number): Promise<TestCart> {
        return await this.testCartRepository
            .createQueryBuilder('tc')
            .innerJoinAndSelect('tc.product', 'tp')
            .where('tp.id = :productId', { productId: productId })
            .getOne();
    }

    async findOneById(cartId: number): Promise<TestCart> {
        return await this.testCartRepository
            .createQueryBuilder('tc')
            .where('tc.id = :cartId', { cartId: cartId })
            .getOne();
    }

    async findAll(): Promise<TestCart[]> {
        return await this.testCartRepository
            .createQueryBuilder('tc')
            .innerJoinAndSelect('tc.product', 'tp')
            .getMany();
    }

    async delete(cartId: number): Promise<void> {
        await this.testCartRepository
            .createQueryBuilder('tc')
            .delete()
            .where('tc.id = :cartId', { cartId: cartId })
            .execute();
    }

    async save(cart: TestCart): Promise<void> {
        await this.testCartRepository.save(cart);
    }
}
