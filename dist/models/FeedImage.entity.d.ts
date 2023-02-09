import { Feed } from './Feed.entity';
export declare class FeedImage {
    id: number;
    originalName: string;
    path: string;
    feed: Feed;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<FeedImage>);
}
