import { FeedLiked } from 'src/models/FeedLiked.entity';
import { Repository } from 'typeorm';
export declare class FeedLikedRepository {
    private feedLikedRepository;
    constructor(feedLikedRepository: Repository<FeedLiked>);
    create(): FeedLiked;
    save(boardImage: FeedLiked): Promise<void>;
    findOne(userId: number, feedId: number): Promise<FeedLiked>;
    findMany(userId: number, boardId: number): Promise<FeedLiked[]>;
    delete(userId: number, feedId: number): Promise<void>;
    getCount(feedId: number): Promise<number>;
}
