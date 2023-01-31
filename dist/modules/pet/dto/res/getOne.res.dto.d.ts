export declare class GetOneMyPetObj {
    myPetId: number;
    name: string;
    breed: string;
    gender: string;
    imagePath: string;
    birthYear: string;
    birthMonth: string;
    birthDate: string;
    togetherYear: string;
    togetherMonth: string;
    togetherDate: string;
}
export declare class GetOneMyPetSuccessDto {
    resultCode: number;
    data: GetOneMyPetObj;
}
export declare class GetOneMyPetFailDto {
    resultCode: number;
    data: any;
}
