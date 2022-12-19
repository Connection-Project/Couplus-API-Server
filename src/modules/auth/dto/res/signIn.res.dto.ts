import { ApiProperty } from '@nestjs/swagger';

export class SignInSuccessObj {
    @ApiProperty()
    accessToken: string;

    @ApiProperty()
    refreshToken: string;
}

export class EmailSignInSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: SignInSuccessObj })
    data: SignInSuccessObj;
}

export class NotFoundUserDto {
    @ApiProperty({ default: 1102 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class InvalidPasswordDto {
    @ApiProperty({ default: 1103 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}

export class EmailSignInFailDto {
    @ApiProperty({ default: 1101 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
