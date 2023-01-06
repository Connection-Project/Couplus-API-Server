import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TestCart } from 'src/models/TestCart.entity';
import { TestCartRepository } from 'src/repositories/testCart.repository';
import { TestProduct } from 'src/models/TestProduct.entity';
import { TestProductRepository } from 'src/repositories/testProduct.repository';

@Module({
    imports: [TypeOrmModule.forFeature([TestCart, TestProduct])],
    controllers: [CartController],
    providers: [CartService, TestCartRepository, TestProductRepository],
})
export class CartModule {}
