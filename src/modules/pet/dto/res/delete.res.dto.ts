import { ApiProperty } from '@nestjs/swagger';

export class DeleteMyPetFailDto {
    @ApiProperty({ default: 1331 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
