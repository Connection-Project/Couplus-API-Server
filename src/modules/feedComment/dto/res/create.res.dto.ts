import { ApiProperty } from '@nestjs/swagger';

export class NotFoundFeedCreateDto {
    @ApiProperty({ default: 1902 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class CreateFeedCommentFailDto {
    @ApiProperty({ default: 1901 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
