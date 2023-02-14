import { ApiProperty } from '@nestjs/swagger';

export class DeleteFreindFailDto {
    @ApiProperty({ default: 1732 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
