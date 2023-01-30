import { Board } from 'src/models/Board.entity';
import { CreateBoardTypes } from 'src/modules/board/dto/types/create.types';
import { Repository } from 'typeorm';
export declare class BoardRepository {
    private boardRepository;
    constructor(boardRepository: Repository<Board>);
    create(body: CreateBoardTypes): Board;
    save(board: Board): Promise<void>;
}
