import { ApiProperty } from '@nestjs/swagger';

export class DeleteFeedFailDto {
    @ApiProperty({ default: 1841 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
