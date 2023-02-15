export declare class GetReuestfriendsObj {
    friendId: number;
    image: string;
    nickName: string;
}
export declare class GetRequestfriendSuccessItems {
    items: GetReuestfriendsObj[];
}
export declare class GetRequestfriendSuccessDto {
    resultCode: number;
    data: GetRequestfriendSuccessItems;
}
export declare class GetRequestfriendFailDto {
    resultCode: number;
    data: any;
}
