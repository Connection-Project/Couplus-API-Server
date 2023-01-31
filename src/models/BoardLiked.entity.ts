import { Board } from 'src/models/Board.entity';
import { User } from 'src/models/User.entity';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'BoardLiked' })
export class BoardLiked {
    @PrimaryColumn()
    userId: number;

    @PrimaryColumn()
    boardId: number;

    @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    user: User;

    @ManyToOne(() => Board, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    board: Board;

    constructor(partial: Partial<BoardLiked>) {
        Object.assign(this, partial);
    }
}
