import { CartService } from './cart.service';
import { CreateCartReqDto } from './dto/req/create.req.dto';
import { UpdateCartReqDto } from './dto/req/update.req.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(body: CreateCartReqDto): Promise<any>;
    getCarts(): Promise<any>;
    update(body: UpdateCartReqDto): Promise<any>;
    delete(cartId: number): Promise<any>;
}
