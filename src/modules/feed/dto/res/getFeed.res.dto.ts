import { ApiProperty } from '@nestjs/swagger';

export class GetFeedObj {
    @ApiProperty()
    feedId: number;

    @ApiProperty()
    image: string[];

    @ApiProperty()
    mine: boolean;

    @ApiProperty()
    feedLiked: boolean;

    @ApiProperty()
    content: string;

    @ApiProperty()
    hashtag: string[];

    @ApiProperty()
    commentCount: number;

    @ApiProperty()
    likedCount: number;

    @ApiProperty()
    createdAt: string;
}

export class GetFeedSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetFeedObj })
    data: GetFeedObj;
}

export class GetFeedFailDto {
    @ApiProperty({ default: 1821 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
