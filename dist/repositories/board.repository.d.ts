import { Board } from 'src/models/Board.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
export declare class BoardRepository {
    private boardRepository;
    constructor(boardRepository: Repository<Board>);
    create(): Board;
    save(board: Board): Promise<void>;
    getQuery(): SelectQueryBuilder<Board>;
    findMany(query: SelectQueryBuilder<Board>, addWhere: any[], limit: number): Promise<[Board[], number]>;
    findOne(query: SelectQueryBuilder<Board>, addWhere: any[]): Promise<Board>;
    delete(boardId: number, userId: number): Promise<void>;
    findOneByIdAndUserId(userId: number, boardId: number): Promise<Board>;
}
