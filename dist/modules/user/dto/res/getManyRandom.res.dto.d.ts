export declare class GetManyRandomUserObj {
    userId: number;
    feed: string;
    image: string;
}
export declare class GetManyRandomUserSuccessItems {
    items: GetManyRandomUserObj[];
}
export declare class GetManyRandomUserSuccessDto {
    resultCode: number;
    data: GetManyRandomUserSuccessItems;
}
export declare class GetManyRandomUserFailDto {
    resultCode: number;
    data: any;
}
