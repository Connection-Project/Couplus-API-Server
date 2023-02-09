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

@Entity({ name: 'FeedImages' })
export class FeedImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    originalName: string;

    @Column()
    path: string;

    @ManyToOne(() => Feed, (feed) => feed.image, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    feed: Feed;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    constructor(partial: Partial<FeedImage>) {
        Object.assign(this, partial);
    }
}
