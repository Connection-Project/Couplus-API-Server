import { ApiProperty } from '@nestjs/swagger';

export class RenewSuccessObj {
    @ApiProperty()
    accessToken: string;

    @ApiProperty()
    refreshToken: string;
}

export class RenewSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: RenewSuccessObj })
    data: RenewSuccessObj;
}

export class RefreshTokenExpireDto {
    @ApiProperty({ default: 9002 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class RenewTokenFailDto {
    @ApiProperty({ default: 9001 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
