import { ApiProperty } from '@nestjs/swagger';

export class CreatefriendReqDto {
    @ApiProperty({ description: '친구 추가하려는 userId를 보내주면 됨' })
    friendId: number;
}
