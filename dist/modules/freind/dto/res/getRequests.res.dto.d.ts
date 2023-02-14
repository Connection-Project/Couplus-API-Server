export declare class GetReuestFreindsObj {
    freindId: number;
    image: string;
    nickName: string;
}
export declare class GetRequestFreindSuccessItems {
    items: GetReuestFreindsObj[];
}
export declare class GetRequestFreindSuccessDto {
    resultCode: number;
    data: GetRequestFreindSuccessItems;
}
export declare class GetRequestFreindFailDto {
    resultCode: number;
    data: any;
}
