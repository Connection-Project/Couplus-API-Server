import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardCommentFailDto {
    @ApiProperty({ default: 1501 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
