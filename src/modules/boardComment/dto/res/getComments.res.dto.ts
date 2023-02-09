import { ApiProperty } from '@nestjs/swagger';

export class GetBoardCommentsObj {
    @ApiProperty()
    commentId: number;

    @ApiProperty()
    writer: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    mine: boolean;

    @ApiProperty()
    createdAt: string;
}

export class GetBoardCommentsDataObj {
    @ApiProperty({ type: GetBoardCommentsObj })
    items: GetBoardCommentsObj;
}

export class GetBoardCommentsSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetBoardCommentsDataObj })
    data: GetBoardCommentsDataObj;
}

export class GetBoardCommentsFailDto {
    @ApiProperty({ default: 1511 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
