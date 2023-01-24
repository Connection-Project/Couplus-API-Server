import { ApiProperty } from '@nestjs/swagger';

export class CreateMyPetFailDto {
    @ApiProperty({ default: 1301 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
