import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardReqDto {
    @ApiProperty({ description: '게시글 타입 영어 or 한글로 통일되게 보내주면됨' })
    type: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;
}
