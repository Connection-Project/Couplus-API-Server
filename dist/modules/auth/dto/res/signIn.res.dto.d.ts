export declare class SignInSuccessObj {
    accessToken: string;
    refreshToken: string;
}
export declare class NotFoundSocialUserObj {
    accountId: string;
    nickName: string;
    email: string;
}
export declare class SignInSuccessDto {
    resultCode: number;
    data: SignInSuccessObj;
}
export declare class NotFoundUserDto {
    resultCode: number;
    data: any;
}
export declare class InvalidPasswordDto {
    resultCode: number;
    data: any;
}
export declare class EmailSignInFailDto {
    resultCode: number;
    data: any;
}
export declare class NotFoundSocialUserDto {
    resultCode: number;
    data: NotFoundSocialUserObj;
}
export declare class SocialSignInFailDto {
    resultCode: number;
    data: any;
}
