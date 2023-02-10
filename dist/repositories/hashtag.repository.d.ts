import { HashTag } from 'src/models/HashTag.entity';
import { Repository } from 'typeorm';
export declare class HashTagRepository {
    private hashtagRepository;
    constructor(hashtagRepository: Repository<HashTag>);
    create(): HashTag;
    save(hashtag: HashTag): Promise<void>;
    findManyByFeedId(feedId: number): Promise<HashTag[]>;
    delete(hashtagId: number): Promise<void>;
}
