export declare class User {
    id: number;
    email: string;
    password: string;
    name: string;
    phone: string;
    gender: string;
    profile: string;
    userCode: string;
    loginCount: number;
    lastLoginAt: Date;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<User>);
}
