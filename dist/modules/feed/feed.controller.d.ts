import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateFeedReqDto } from './dto/req/create.req.dto';
import { FeedService } from './feed.service';
export declare class FeedController {
    private feedService;
    constructor(feedService: FeedService);
    create(userId: number, files: File[], body: CreateFeedReqDto): Promise<ReturnResDto>;
    getMyFeeds(userId: number, limit: number): Promise<ReturnResDto>;
    getfriendFeeds(userId: number, limit: number): Promise<ReturnResDto>;
}
