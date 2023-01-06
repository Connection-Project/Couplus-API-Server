import { ApiProperty } from '@nestjs/swagger';

export class ProductObj {
    @ApiProperty()
    id: number;

    @ApiProperty()
    productName: string;

    @ApiProperty()
    thumb: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    rating: number;

    @ApiProperty()
    detail: string;
}

export class ProductListObj {
    @ApiProperty({ type: ProductObj })
    items: ProductObj[];

    @ApiProperty()
    count: number;
}

export class ProductListSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: ProductListObj })
    data: ProductListObj;
}

export class ProductListFailDto {
    @ApiProperty({ default: 1101 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
