import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardFailDto {
    @ApiProperty({ default: 1401 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
