import { BoardImage } from 'src/models/BoardImage.entity';
import { Repository } from 'typeorm';
export declare class BoardImageRepository {
    private boardImageRepository;
    constructor(boardImageRepository: Repository<BoardImage>);
    create(): BoardImage;
    save(boardImage: BoardImage): Promise<void>;
}
