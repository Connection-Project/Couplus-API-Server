export declare class getInfoObj {
    email: string;
    name: string;
    phone: string;
    gender: string;
    userCode: string;
}
export declare class getInfoSuccessDto {
    resultCode: number;
    data: getInfoObj;
}
export declare class getInfoFailDto {
    resultCode: number;
    data: any;
}
