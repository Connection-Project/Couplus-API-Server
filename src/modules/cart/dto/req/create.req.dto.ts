import { ApiProperty } from '@nestjs/swagger';

export class CreateCartReqDto {
    @ApiProperty()
    productId: number;
}
