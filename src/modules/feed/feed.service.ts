import { Injectable } from '@nestjs/common';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { FeedRepository } from 'src/repositories/feed.repository';
import { FeedImageRepository } from 'src/repositories/feedImage.repository';

@Injectable()
export class FeedService {
    constructor(
        private readonly awsService: AwsService,
        private readonly feedRepository: FeedRepository,
        private readonly feedImageRepository: FeedImageRepository,
    ) {}
}
