import { ApiProperty } from '@nestjs/swagger';

export class UpdateFeedFailDto {
    @ApiProperty({ default: 1831 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
