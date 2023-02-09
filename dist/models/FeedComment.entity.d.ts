import { Feed } from './Feed.entity';
import { User } from './User.entity';
export declare class FeedComment {
    id: number;
    content: string;
    feed: Feed;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<FeedComment>);
}
