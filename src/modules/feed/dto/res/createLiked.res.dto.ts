import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedLikedObj {
    @ApiProperty()
    liked: boolean;

    @ApiProperty()
    likedCount: number;
}

export class CreateFeedLikedSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: CreateFeedLikedObj })
    data: CreateFeedLikedObj;
}

export class CreateFeedLikedFailDto {
    @ApiProperty({ default: 1851 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
