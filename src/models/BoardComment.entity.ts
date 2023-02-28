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
import { Board } from './Board.entity';
import { BoardCommentReply } from './BoardCommentReply.entity';
import { User } from './User.entity';

@Entity({ name: 'BoardComments' })
export class BoardComment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, length: 2000 })
    content: string;

    @ManyToOne(() => Board, (board) => board.comment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    board: Board;

    @ManyToOne(() => User, (user) => user.comment)
    @JoinColumn()
    user: User;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @OneToMany(() => BoardCommentReply, (reply) => reply.comment, { cascade: true })
    reply: BoardCommentReply[];

    constructor(partial: Partial<BoardComment>) {
        Object.assign(this, partial);
    }
}
