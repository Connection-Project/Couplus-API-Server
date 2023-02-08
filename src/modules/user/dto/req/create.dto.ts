import { ApiProperty } from '@nestjs/swagger';

export class EmailRegistUserReqDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    nickName: string;

    @ApiProperty()
    phone: string;

    @ApiProperty({ description: '이미지 이름명 : formdata에 key의 이름으로 넣으면 됨' })
    user: any;
}

export class SocialRegistUserReqDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    nickName: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    accountId: string;

    @ApiProperty({ description: '이미지 이름명 : formdata에 key의 이름으로 넣으면 됨' })
    user: any;
}
