import { ApiProperty } from '@nestjs/swagger';

export class DeleteCartItemFailDto {
    @ApiProperty({ default: 1231 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
