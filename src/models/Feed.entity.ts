import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { FeedComment } from './FeedComment.entity';
import { FeedImage } from './FeedImage.entity';
import { HashTag } from './HashTag.entity';
import { User } from './User.entity';

@Entity({ name: 'Feed' })
export class Feed {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: '' })
    content: string;

    @ManyToOne(() => User, (user) => user.feed, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @OneToMany(() => FeedImage, (image) => image.feed, { cascade: true })
    image: FeedImage[];

    @OneToMany(() => FeedComment, (comment) => comment.feed, { cascade: true })
    comment: FeedComment[];

    @OneToMany(() => HashTag, (hashtag) => hashtag.feed, { cascade: true })
    hashtag: HashTag[];

    constructor(partial: Partial<Feed>) {
        Object.assign(this, partial);
    }
}
