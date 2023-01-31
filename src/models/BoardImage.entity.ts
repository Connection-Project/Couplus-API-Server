import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Board } from './Board.entity';

@Entity({ name: 'BoardImages' })
export class BoardImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    originalName: string;

    @Column()
    path: string;

    @ManyToOne(() => Board, (board) => board.image, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn()
    board: Board;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    constructor(partial: Partial<BoardImage>) {
        Object.assign(this, partial);
    }
}
