export declare class getInfoObj {
    email: string;
    name: string;
    phone: string;
    nickName: string;
    registType: string;
}
export declare class getInfoSuccessDto {
    resultCode: number;
    data: getInfoObj;
}
export declare class getInfoFailDto {
    resultCode: number;
    data: any;
}
