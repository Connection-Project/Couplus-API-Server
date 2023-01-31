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
import { BoardComment } from './BoardComment.entity';
import { BoardImage } from './BoardImage.entity';
import { User } from './User.entity';

@Entity({ name: 'Boards' })
export class Board {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: true, length: 2000 })
    content: string;

    @Column({ nullable: false })
    type: string;

    @ManyToOne(() => User, (user) => user.board, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    user: User;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    @OneToMany(() => BoardComment, (comment) => comment.board, { cascade: true })
    comment: BoardComment[];

    @OneToMany(() => BoardImage, (image) => image.board, { cascade: true })
    image: BoardImage[];

    constructor(partial: Partial<Board>) {
        Object.assign(this, partial);
    }
}
