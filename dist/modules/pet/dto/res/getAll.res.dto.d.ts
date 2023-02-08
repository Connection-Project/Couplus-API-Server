export declare class GetMyPetsObj {
    myPetId: number;
    represent: boolean;
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
    data: GetMyPetItems;
}
export declare class GetMyPetsFailDto {
    resultCode: number;
    data: any;
}
