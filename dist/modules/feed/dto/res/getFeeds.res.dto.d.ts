export declare class GetFeedsObj {
    feedId: number;
    image: string;
}
export declare class GetFeedsSuccessItems {
    items: GetFeedsObj[];
}
export declare class GetFeedsSuccessDto {
    resultCode: number;
    data: GetFeedsSuccessItems;
}
export declare class GetFeedsFailDto {
    resultCode: number;
    data: any;
}
