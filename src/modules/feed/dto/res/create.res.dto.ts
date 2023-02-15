import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedFailDto {
    @ApiProperty({ default: 1802 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
