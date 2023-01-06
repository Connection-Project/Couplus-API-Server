import { ApiProperty } from '@nestjs/swagger';

export class CreateCartFailDto {
    @ApiProperty({ default: 1201 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
