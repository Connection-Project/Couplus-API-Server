import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardLikedObj {
    @ApiProperty()
    liked: boolean;

    @ApiProperty()
    likedCount: number;
}

export class CreateBoardLikedSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: CreateBoardLikedObj })
    data: CreateBoardLikedObj;
}

export class CreateBoardLikedFailDto {
    @ApiProperty({ default: 1441 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
