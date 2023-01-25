import { ApiProperty } from '@nestjs/swagger';

export class UpdateMyPetFailDto {
    @ApiProperty({ default: 1321 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class NotFoundMypetDto {
    @ApiProperty({ default: 1322 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
