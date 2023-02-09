import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Feed } from './Feed.entity';
import { User } from './User.entity';

@Entity({ name: 'FeedComments' })
export class FeedComment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, length: 2000 })
    content: string;

    @ManyToOne(() => Feed, (feed) => feed.comment)
    @JoinColumn()
    feed: Feed;

    @ManyToOne(() => User, (user) => user.feedComment)
    @JoinColumn()
    user: User;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    constructor(partial: Partial<FeedComment>) {
        Object.assign(this, partial);
    }
}
