import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResultFailDto, ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { CartService } from './cart.service';
import { CreateCartReqDto } from './dto/req/create.req.dto';
import { CreateCartFailDto } from './dto/res/create.res.dto';
import { DeleteCartItemFailDto } from './dto/res/delete.res.dto';
import { GetCartFailDto, GetCartSuccessDto } from './dto/res/list.res.dto';
import { UpdateCartQuantityUpdateFail } from './dto/res/update.res.dto';

@ApiTags('장바구니')
@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Post()
    @ApiOperation({ summary: '장바구니 추가' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '장바구니 추가 성공' })
    @ApiResponse({ status: 400, type: ResultFailDto, description: '요청 값 에러' })
    @ApiResponse({ status: 401, type: CreateCartFailDto, description: '장바구니 추가 실패' })
    async create(@Body() body: CreateCartReqDto) {
        return this.cartService.create(body.productId);
    }

    @Get()
    @ApiOperation({ summary: '장바구니 리스트' })
    @ApiResponse({ status: 200, type: GetCartSuccessDto, description: '장바구니 리스트 성공' })
    @ApiResponse({ status: 400, type: ResultFailDto, description: '요청 값 에러' })
    @ApiResponse({ status: 401, type: GetCartFailDto, description: '장바구니 리스트 실패' })
    async getCarts() {
        return this.cartService.getCars();
    }

    @Patch('/:cartId')
    @ApiOperation({ summary: '장바구니 수량 수정' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '장바구니 수량 수정 성공' })
    @ApiResponse({ status: 400, type: ResultFailDto, description: '요청 값 에러' })
    @ApiResponse({
        status: 401,
        type: UpdateCartQuantityUpdateFail,
        description: '장바구니 수량 수정 실패',
    })
    async update(@Param('cartId', ParseIntPipe) cartId: number) {
        return this.cartService.update(cartId);
    }

    @Delete('/:cartId')
    @ApiOperation({ summary: '장바구니 품목 삭제' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '장바구니 품목 삭제 성공' })
    @ApiResponse({ status: 400, type: ResultFailDto, description: '요청 값 에러' })
    @ApiResponse({
        status: 401,
        type: DeleteCartItemFailDto,
        description: '장바구니 품목 삭제 실패',
    })
    async delete(@Param('cartId', ParseIntPipe) cartId: number) {
        return this.cartService.delete(cartId);
    }
}
