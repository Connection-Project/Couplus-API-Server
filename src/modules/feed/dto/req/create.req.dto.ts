import { ApiProperty } from '@nestjs/swagger';

export class CreateFeedReqDto {
    @ApiProperty({ required: true })
    content: string;

    @ApiProperty({ required: false })
    hashtag?: string[];

    @ApiProperty({ description: 'formdata key의 이름으로 보내주면 됨' })
    feed?: File[];
}
