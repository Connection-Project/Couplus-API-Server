import { ApiProperty } from '@nestjs/swagger';

export class GetOneBoardObj {
    @ApiProperty()
    boardId: number;

    @ApiProperty()
    writer: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    images: string[];

    @ApiProperty()
    liked: boolean;

    @ApiProperty()
    likedCount: number;

    @ApiProperty()
    commentCount: number;

    @ApiProperty()
    createdAt: string;
}

export class GetOneBoardSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetOneBoardObj })
    data: GetOneBoardObj;
}

export class GetOneBoardFailDto {
    @ApiProperty({ default: 1421 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
