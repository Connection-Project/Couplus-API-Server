import { Board } from 'src/models/Board.entity';
import { Repository } from 'typeorm';
export declare class BoardRepository {
    private boardRepository;
    constructor(boardRepository: Repository<Board>);
    create(): Board;
    save(board: Board): Promise<void>;
}
