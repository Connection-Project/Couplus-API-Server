import { FeedComment } from './FeedComment.entity';
import { FeedImage } from './FeedImage.entity';
import { HashTag } from './HashTag.entity';
import { User } from './User.entity';
export declare class Feed {
    id: number;
    content: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    image: FeedImage[];
    comment: FeedComment[];
    hashtag: HashTag[];
    constructor(partial: Partial<Feed>);
}
