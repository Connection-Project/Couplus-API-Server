export declare enum FriendStatus {
    request = "request",
    confirmed = "confirmed"
}
export declare class Friend {
    userId: number;
    friendId: number;
    status: FriendStatus;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<Friend>);
}
