export declare class ProductObj {
    id: number;
    productName: string;
    thumb: string;
    price: number;
    rating: number;
    detail: string;
}
export declare class ProductListObj {
    items: ProductObj[];
    count: number;
}
export declare class ProductListSuccessDto {
    resultCode: number;
    data: ProductListObj;
}
export declare class ProductListFailDto {
    resultCode: number;
    data: any;
}
