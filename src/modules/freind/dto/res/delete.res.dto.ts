import { ApiProperty } from '@nestjs/swagger';

export class DeletefriendFailDto {
    @ApiProperty({ default: 1732 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
