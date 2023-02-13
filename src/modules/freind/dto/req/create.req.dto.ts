import { ApiProperty } from '@nestjs/swagger';

export class CreateFreindReqDto {
    @ApiProperty({ description: '친구 추가하려는 userId를 보내주면 됨' })
    freindId: number;
}
