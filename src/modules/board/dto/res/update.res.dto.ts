import { ApiProperty } from '@nestjs/swagger';

export class UpdateBoardFailDto {
    @ApiProperty({ default: 1421 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class UnauthorizedUpdateBoard {
    @ApiProperty({ default: 1422 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
