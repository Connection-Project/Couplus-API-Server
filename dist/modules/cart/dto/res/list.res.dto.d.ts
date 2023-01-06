export declare class GetCartObj {
    cartId: number;
    thumb: string;
    productName: string;
    price: number;
    quantity: number;
}
export declare class GetCartSuccessDto {
    resultCode: number;
    data: GetCartObj;
}
export declare class GetCartFailDto {
    resultCode: number;
    data: any;
}
