import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserFailDto {
    @ApiProperty({ default: 1021 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
