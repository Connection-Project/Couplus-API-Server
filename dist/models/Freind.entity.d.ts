export declare enum FreindStatus {
    request = "request",
    confirmed = "confirmed"
}
export declare class Freind {
    id: number;
    sender: number;
    reciever: number;
    status: FreindStatus;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<Freind>);
}
