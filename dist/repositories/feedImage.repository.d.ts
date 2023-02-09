import { FeedImage } from 'src/models/FeedImage.entity';
import { Repository } from 'typeorm';
export declare class FeedImageRepository {
    private feedImageRepository;
    constructor(feedImageRepository: Repository<FeedImage>);
    create(): FeedImage;
    save(feedImage: FeedImage): Promise<void>;
    getOneByPath(path: string): Promise<FeedImage>;
}
