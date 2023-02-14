import { AwsService } from 'src/lib/aws/src/aws.service';
import { FeedRepository } from 'src/repositories/feed.repository';
import { FeedImageRepository } from 'src/repositories/feedImage.repository';
import { FeedLikedRepository } from 'src/repositories/feedLiked.repository';
import { HashTagRepository } from 'src/repositories/hashtag.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateFeedReqDto } from './dto/req/create.req.dto';
import { UpdateFeedReqDto } from './dto/req/update.req.dto';
export declare class FeedService {
    private readonly awsService;
    private readonly feedRepository;
    private readonly feedImageRepository;
    private readonly feedLikedRepository;
    private readonly userRepository;
    private readonly hashtagRepository;
    constructor(awsService: AwsService, feedRepository: FeedRepository, feedImageRepository: FeedImageRepository, feedLikedRepository: FeedLikedRepository, userRepository: UserRepository, hashtagRepository: HashTagRepository);
    create(userId: number, files: File[], body: CreateFeedReqDto): Promise<ReturnResDto>;
    getMyFeeds(userId: number, limit: number): Promise<ReturnResDto>;
    getFreindFeeds(freindId: number, limit: number): Promise<ReturnResDto>;
    getFeed(userId: number, feedId: number): Promise<ReturnResDto>;
    update(userId: number, feedId: number, body: UpdateFeedReqDto): Promise<ReturnResDto>;
    delete(userId: number, feedId: number): Promise<ReturnResDto>;
}
