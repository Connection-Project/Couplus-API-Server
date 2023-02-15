import { ApiProperty } from '@nestjs/swagger';

export class CreatefriendFailDto {
    @ApiProperty({ default: 1701 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
