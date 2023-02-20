import { ApiProperty } from '@nestjs/swagger';

export class NotFoundFeedUpdateDto {
    @ApiProperty({ default: 1922 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class UpdateFeedCommentFailDto {
    @ApiProperty({ default: 1921 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
