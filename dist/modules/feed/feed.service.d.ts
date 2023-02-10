import { AwsService } from 'src/lib/aws/src/aws.service';
import { FeedRepository } from 'src/repositories/feed.repository';
import { FeedImageRepository } from 'src/repositories/feedImage.repository';
export declare class FeedService {
    private readonly awsService;
    private readonly feedRepository;
    private readonly feedImageRepository;
    constructor(awsService: AwsService, feedRepository: FeedRepository, feedImageRepository: FeedImageRepository);
}
