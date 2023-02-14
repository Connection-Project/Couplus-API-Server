import { Feed } from 'src/models/Feed.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
export declare class FeedRepository {
    private feedRepository;
    constructor(feedRepository: Repository<Feed>);
    create(): Feed;
    save(feed: Feed): Promise<void>;
    findOneByIdAndUserId(userId: number, feedId: number): Promise<Feed>;
    delete(feedId: number, userId: number): Promise<void>;
    getQuery(): SelectQueryBuilder<Feed>;
    findOne(query: SelectQueryBuilder<Feed>, addWhere: any[]): Promise<Feed>;
    findMany(query: SelectQueryBuilder<Feed>, addWhere: any[], limit: number): Promise<[Feed[], number]>;
    getCount(userId: number): Promise<number>;
}
