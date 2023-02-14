import { ApiProperty } from '@nestjs/swagger';

export class ConfirmRequestFreindFailDto {
    @ApiProperty({ default: 1711 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
