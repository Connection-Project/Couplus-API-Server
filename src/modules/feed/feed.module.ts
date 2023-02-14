import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { Feed } from 'src/models/Feed.entity';
import { FeedComment } from 'src/models/FeedComment.entity';
import { FeedImage } from 'src/models/FeedImage.entity';
import { FeedLiked } from 'src/models/FeedLiked.entity';
import { HashTag } from 'src/models/HashTag.entity';
import { User } from 'src/models/User.entity';
import { FeedRepository } from 'src/repositories/feed.repository';
import { FeedImageRepository } from 'src/repositories/feedImage.repository';
import { FeedLikedRepository } from 'src/repositories/feedLiked.repository';
import { HashTagRepository } from 'src/repositories/hashtag.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Feed,
            FeedImage,
            FeedComment,
            FeedLiked,
            User,
            HashTag,
            FeedLiked,
            HashTag,
        ]),
    ],
    controllers: [FeedController],
    providers: [
        FeedService,
        AwsService,
        FeedRepository,
        FeedImageRepository,
        FeedLikedRepository,
        UserRepository,
        HashTagRepository,
    ],
})
export class FeedModule {}
