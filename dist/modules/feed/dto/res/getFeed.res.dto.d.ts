export declare class GetFeedObj {
    feedId: number;
    image: string[];
    mine: boolean;
    feedLiked: boolean;
    content: string;
    hashtag: string[];
    commentCount: number;
    likedCount: number;
    createdAt: string;
}
export declare class GetFeedSuccessDto {
    resultCode: number;
    data: GetFeedObj;
}
export declare class GetFeedFailDto {
    resultCode: number;
    data: any;
}
