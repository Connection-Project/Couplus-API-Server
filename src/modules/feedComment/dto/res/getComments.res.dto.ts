import { ApiProperty } from '@nestjs/swagger';

export class GetFeedCommentsObj {
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

export class GetFeedCommentsDataObj {
    @ApiProperty({ type: [GetFeedCommentsObj] })
    items: GetFeedCommentsObj[];
}

export class GetFeedCommentsSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetFeedCommentsDataObj })
    data: GetFeedCommentsDataObj;
}

export class GetFeedCommentsFailDto {
    @ApiProperty({ default: 1911 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
