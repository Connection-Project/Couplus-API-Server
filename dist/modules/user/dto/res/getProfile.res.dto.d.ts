export declare class MyPetsObj {
    myPetId: number;
    breed: string;
    name: string;
}
export declare class GetProfileObj {
    userId: number;
    nickName: string;
    image: string;
    feedCount: number;
    friendCount: number;
    myPets: MyPetsObj[];
}
export declare class GetProfileSuccessDto {
    resultCode: number;
    data: GetProfileObj;
}
export declare class GetProfileFailDto {
    resultCode: number;
    data: any;
}
