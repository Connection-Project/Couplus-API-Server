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

@Entity({ name: 'HashTags' })
export class HashTag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 30, comment: '해시태그명' })
    name: string;

    @ManyToOne(() => Feed, (feed) => feed.hashtag, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    feed: Feed;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    constructor(partial: Partial<HashTag>) {
        Object.assign(this, partial);
    }
}
