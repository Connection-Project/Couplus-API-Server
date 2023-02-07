import { ApiProperty } from '@nestjs/swagger';

export class UpdateBoardReqDto {
    @ApiProperty()
    boardId: number;

    @ApiProperty()
    type: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

    @ApiProperty({ description: '삭제 할 이미지 주소를 배열로 담아서 보내주면 됨' })
    deleteImages: string[];

    @ApiProperty({ description: 'board라는 formdata key로 보내주면됨' })
    board?: File[];
}
