import { User } from 'src/models/User.entity';
import { Feed } from './Feed.entity';
export declare class FeedLiked {
    userId: number;
    feedId: number;
    user: User;
    feed: Feed;
    constructor(partial: Partial<FeedLiked>);
}
