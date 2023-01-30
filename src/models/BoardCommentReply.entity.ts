import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { BoardComment } from './BoardComment.entity';
import { User } from './User.entity';

@Entity({ name: 'BoardCommentReplys' })
export class BoardCommentReply {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, length: 2000 })
    content: string;

    @ManyToOne(() => BoardComment, (comment) => comment.reply, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    comment: BoardComment;

    @ManyToOne(() => User, (user) => user.reply)
    @JoinColumn()
    user: User;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    constructor(partial: Partial<BoardCommentReply>) {
        Object.assign(this, partial);
    }
}
