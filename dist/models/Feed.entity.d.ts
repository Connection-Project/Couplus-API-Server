import { FeedComment } from './FeedComment.entity';
import { FeedImage } from './FeedImage.entity';
import { User } from './User.entity';
export declare class Feed {
    id: number;
    content: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    image: FeedImage[];
    comment: FeedComment[];
    constructor(partial: Partial<Feed>);
}
