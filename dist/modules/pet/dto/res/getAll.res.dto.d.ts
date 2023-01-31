export declare class GetMyPetsObj {
    myPetId: number;
    name: string;
    age: number;
    breed: string;
    gender: string;
    birthDay: string;
    togetherDay: number;
    imagePath: string;
}
export declare class GetMyPetItems {
    items: GetMyPetsObj[];
}
export declare class GetMyPetsSuccessDto {
    resultCode: number;
    data: GetMyPetsObj;
}
export declare class GetMyPetsFailDto {
    resultCode: number;
    data: any;
}
