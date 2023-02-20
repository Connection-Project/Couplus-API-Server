import { ApiProperty } from '@nestjs/swagger';

export class SignInSuccessObj {
    @ApiProperty()
    accessToken: string;

    @ApiProperty()
    accessTokenExpireIn: Date;

    @ApiProperty()
    refreshToken: string;

    @ApiProperty()
    refreshTokenExpireIn: Date;
}

export class NotFoundSocialUserObj {
    @ApiProperty()
    accountId: string;

    @ApiProperty()
    nickName: string;

    @ApiProperty()
    email: string;
}

export class SignInSuccessDto {
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

export class NotFoundSocialUserDto {
    @ApiProperty({ default: 1112 })
    resultCode: number;

    @ApiProperty({ type: NotFoundSocialUserObj })
    data: NotFoundSocialUserObj;
}

export class SocialSignInFailDto {
    @ApiProperty({ default: 1111 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
