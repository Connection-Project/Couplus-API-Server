export declare enum FreindStatus {
    request = "request",
    confirmed = "confirmed"
}
export declare class Freind {
    userId: number;
    freindId: number;
    status: FreindStatus;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<Freind>);
}
