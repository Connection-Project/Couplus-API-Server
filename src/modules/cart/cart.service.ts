import { Injectable } from '@nestjs/common';
import { TestCartRepository } from 'src/repositories/testCart.repository';
import { TestCart } from 'src/models/TestCart.entity';
import { TestProductRepository } from 'src/repositories/testProduct.repository';
import { TestProduct } from 'src/models/TestProduct.entity';
import { UpdateCartReqDto } from './dto/req/update.req.dto';

@Injectable()
export class CartService {
    constructor(
        private readonly testCartRepository: TestCartRepository,
        private readonly testProductRepository: TestProductRepository,
    ) {}

    async create(productId: number): Promise<any> {
        try {
            let status = 0;
            let resultCode = 0;
            const alreadyCart: TestCart = await this.testCartRepository.findOneByProduct(productId);
            if (alreadyCart) {
                status = 201;
                resultCode = 1202;
            } else {
                const product: TestProduct = await this.testProductRepository.findOne(productId);
                const newCart: TestCart = this.testCartRepository.create(product);
                await this.testCartRepository.save(newCart);
                status = 200;
                resultCode = 1;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1201, data: null } };
        }
    }

    async getCars(): Promise<any> {
        try {
            const cart: TestCart[] = await this.testCartRepository.findAll();
            const items = [];
            for (let i = 0; i < cart.length; i++) {
                items[i] = {
                    cartId: cart[i].id,
                    thumb: cart[i].product.thumb,
                    productName: cart[i].product.productName,
                    price: cart[i].product.price,
                    quantity: cart[i].quantity,
                };
            }
            return { status: 200, data: { resultCode: 1, data: items } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1211, data: null } };
        }
    }

    async update(body: UpdateCartReqDto): Promise<any> {
        try {
            const { cartId, plus } = body;
            const cart: TestCart = await this.testCartRepository.findOneById(cartId);
            if (plus) cart.quantity += 1;
            else cart.quantity -= 1;
            await this.testCartRepository.save(cart);
            return { status: 200, data: { resultCode: 1, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1221, data: null } };
        }
    }

    async delete(cartId: number): Promise<any> {
        try {
            let status = 0;
            let resultCode = 0;
            const cart: TestCart = await this.testCartRepository.findOneById(cartId);
            if (cart) {
                await this.testCartRepository.delete(cartId);
                status = 200;
                resultCode = 1;
            } else {
                status = 201;
                resultCode = 1232;
            }
            return { status: 200, data: { resultCode: 1, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1231, data: null } };
        }
    }
}
