import { ApiProperty } from '@nestjs/swagger';

export class NotFoundFeedDeleteDto {
    @ApiProperty({ default: 1932 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class DeleteFeedCommentFailDto {
    @ApiProperty({ default: 1931 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
