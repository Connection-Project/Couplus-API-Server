import { ApiProperty } from '@nestjs/swagger';

export class WithdrawUserFailDto {
    @ApiProperty({ default: 1031 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
