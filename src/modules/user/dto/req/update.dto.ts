import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserReqDto {
    @ApiProperty()
    password?: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    nickName: string;

    @ApiProperty()
    phone: string;

    @ApiProperty({ description: '이미지 이름명 : formdata에 key의 이름으로 넣으면 됨' })
    user: any;
}
