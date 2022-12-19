export declare class SignInSuccessObj {
    accessToken: string;
    refreshToken: string;
}
export declare class EmailSignInSuccessDto {
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
