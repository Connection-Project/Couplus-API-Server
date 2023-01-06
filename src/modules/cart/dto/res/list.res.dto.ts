import { ApiProperty } from '@nestjs/swagger';

export class GetCartObj {
    @ApiProperty()
    cartId: number;

    @ApiProperty()
    thumb: string;

    @ApiProperty()
    productName: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    quantity: number;
}

export class GetCartSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetCartObj })
    data: GetCartObj;
}

export class GetCartFailDto {
    @ApiProperty({ default: 1211 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
