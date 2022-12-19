import { ApiProperty } from '@nestjs/swagger';

export class ExistUserDto {
    @ApiProperty({ default: 1001 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class EmailSignInFailDto {
    @ApiProperty({ default: 1002 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
