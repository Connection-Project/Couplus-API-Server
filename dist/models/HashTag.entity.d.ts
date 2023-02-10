import { Feed } from './Feed.entity';
export declare class HashTag {
    id: number;
    name: string;
    feed: Feed;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<HashTag>);
}
