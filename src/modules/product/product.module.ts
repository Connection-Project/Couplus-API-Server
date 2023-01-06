import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TestProduct } from 'src/models/TestProduct.entity';
import { TestProductRepository } from 'src/repositories/testProduct.repository';

@Module({
    imports: [TypeOrmModule.forFeature([TestProduct])],
    controllers: [ProductController],
    providers: [ProductService, TestProductRepository],
})
export class ProductModule {}
