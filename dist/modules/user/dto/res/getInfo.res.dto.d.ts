export declare class GetInfoObj {
    email: string;
    name: string;
    phone: string;
    nickName: string;
    registType: string;
}
export declare class GetInfoSuccessDto {
    resultCode: number;
    data: GetInfoObj;
}
export declare class GetInfoFailDto {
    resultCode: number;
    data: any;
}
