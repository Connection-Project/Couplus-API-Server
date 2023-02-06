import { BoardLiked } from 'src/models/BoardLiked.entity';
import { Repository } from 'typeorm';
export declare class BoardLikedRepository {
    private boardLikedRepository;
    constructor(boardLikedRepository: Repository<BoardLiked>);
    create(): BoardLiked;
    save(boardImage: BoardLiked): Promise<void>;
    findOne(userId: number, boardId: number): Promise<BoardLiked>;
    findMany(userId: number, boardId: number): Promise<BoardLiked[]>;
    delete(userId: number, boardId: number): Promise<void>;
    getCount(boardId: number): Promise<number>;
}
