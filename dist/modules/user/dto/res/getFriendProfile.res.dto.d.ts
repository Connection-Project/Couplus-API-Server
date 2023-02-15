import { MyPetsObj } from './getProfile.res.dto';
export declare class GetFriendProfileObj {
    userId: number;
    nickName: string;
    image: string;
    feedCount: number;
    friendCount: number;
    friendStatus: number;
    myPets: MyPetsObj[];
}
export declare class GetFriendProfileSuccessDto {
    resultCode: number;
    data: GetFriendProfileObj;
}
export declare class GetFriendProfileFailDto {
    resultCode: number;
    data: any;
}
