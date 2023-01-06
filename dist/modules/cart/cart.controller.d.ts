import { CartService } from './cart.service';
import { CreateCartReqDto } from './dto/req/create.req.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(body: CreateCartReqDto): Promise<any>;
    getCarts(): Promise<any>;
    update(cartId: number): Promise<any>;
    delete(cartId: number): Promise<any>;
}
