import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResultFailDto } from '../common/dto/res/result.res.dto';
import { ProductListFailDto, ProductListSuccessDto } from './dto/res/list.res.dto';
import { ProductService } from './product.service';

@ApiTags('상품 조회')
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    @ApiOperation({ summary: '상품 리스트' })
    @ApiResponse({ status: 200, type: ProductListSuccessDto, description: '상품 리스트 성공' })
    @ApiResponse({ status: 400, type: ResultFailDto, description: '요청 값 에러' })
    @ApiResponse({ status: 401, type: ProductListFailDto, description: '상품 리스트 실패' })
    async getProducts() {
        return await this.productService.getProducts();
    }
}
