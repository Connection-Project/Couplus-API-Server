import { ApiProperty } from '@nestjs/swagger';

export class UpdateCartQuantityUpdateFail {
    @ApiProperty({ default: 1221 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
