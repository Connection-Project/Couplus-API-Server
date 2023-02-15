import { ApiProperty } from '@nestjs/swagger';

export class ConfirmRequestfriendFailDto {
    @ApiProperty({ default: 1711 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
