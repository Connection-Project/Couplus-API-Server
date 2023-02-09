import { User } from 'src/models/User.entity';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Feed } from './Feed.entity';

@Entity({ name: 'FeedLiked' })
export class FeedLiked {
    @PrimaryColumn()
    userId: number;

    @PrimaryColumn()
    feedId: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    user: User;

    @ManyToOne(() => Feed, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    feed: Feed;

    constructor(partial: Partial<FeedLiked>) {
        Object.assign(this, partial);
    }
}
