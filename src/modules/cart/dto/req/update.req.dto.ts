import { ApiProperty } from '@nestjs/swagger';

export class UpdateCartReqDto {
    @ApiProperty()
    cartId: number;

    @ApiProperty()
    plus: boolean;
}
