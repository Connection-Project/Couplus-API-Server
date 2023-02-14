import { ApiProperty } from '@nestjs/swagger';

export class UpdateFeedReqDto {
    @ApiProperty()
    content: string;
}
