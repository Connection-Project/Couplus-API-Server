import { ApiProperty } from '@nestjs/swagger';

export class UnauthorizedDeleteBoard {
    @ApiProperty({ default: 1432 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class DeleteBoardFailDto {
    @ApiProperty({ default: 1431 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
