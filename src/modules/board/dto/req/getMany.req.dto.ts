import { ApiProperty } from '@nestjs/swagger';

export class GetManyBoardReqDto {
    @ApiProperty()
    type: string;

    @ApiProperty()
    limit: number;
}
