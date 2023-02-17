import { Injectable } from '@nestjs/common';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { Feed } from 'src/models/Feed.entity';
import { FeedImage } from 'src/models/FeedImage.entity';
import { FeedLiked } from 'src/models/FeedLiked.entity';
import { HashTag } from 'src/models/HashTag.entity';
import { User } from 'src/models/User.entity';
import { FeedRepository } from 'src/repositories/feed.repository';
import { FeedImageRepository } from 'src/repositories/feedImage.repository';
import { FeedLikedRepository } from 'src/repositories/feedLiked.repository';
import { HashTagRepository } from 'src/repositories/hashtag.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { formatDateParam } from 'src/utils/date';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateFeedReqDto } from './dto/req/create.req.dto';
import { UpdateFeedReqDto } from './dto/req/update.req.dto';

@Injectable()
export class FeedService {
    constructor(
        private readonly awsService: AwsService,
        private readonly feedRepository: FeedRepository,
        private readonly feedImageRepository: FeedImageRepository,
        private readonly feedLikedRepository: FeedLikedRepository,
        private readonly userRepository: UserRepository,
        private readonly hashtagRepository: HashTagRepository,
    ) {}

    async create(userId: number, files: File[], body: CreateFeedReqDto): Promise<ReturnResDto> {
        try {
            let resultCode = 0;
            const { content, hashtag } = body;
            const user: User = await this.userRepository.findByKey('id', userId);
            const feed: Feed = this.feedRepository.create();
            feed.user = user;
            feed.content = content;
            await this.feedRepository.save(feed);

            // ! 이미지가 존재 할 경우
            if (files.length > 0) {
                for (let i = 0; i < files.length; i++) {
                    const { Key, Location } = await this.awsService.uploadImage(files[i]);
                    const feedImage: FeedImage = this.feedImageRepository.create();
                    feedImage.feed = feed;
                    feedImage.originalName = Key;
                    feedImage.path = Location;
                    await this.feedImageRepository.save(feedImage);
                }
            }
            // ! 해시태그가 존재 할 경우
            if (hashtag) {
                for (let i = 0; i < hashtag.length; i++) {
                    const newHashtag: HashTag = this.hashtagRepository.create();
                    newHashtag.name = hashtag[i];
                    newHashtag.feed = feed;
                    await this.hashtagRepository.save(newHashtag);
                }
            }

            resultCode = 1;
            return { data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1801, data: null } };
        }
    }

    // ! 나의 피드 리스트
    async getMyFeeds(userId: number): Promise<ReturnResDto> {
        try {
            const query = this.feedRepository.getQuery();
            const feedWhere = [
                {
                    key: 'u.id = :userId',
                    value: {
                        userId: userId,
                    },
                },
            ];
            const [row, cnt] = await this.feedRepository.findMany(query, feedWhere);
            const items = [];
            for (let i = 0; i < row.length; i++) {
                items[i] = {
                    feedId: row[i].id,
                    image: row[i].image[0].path,
                };
            }
            return { data: { resultCode: 1, data: { items: items, count: cnt } } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1811, data: null } };
        }
    }

    // ! 다른 사람 피드(token x)
    async getfriendFeeds(friendId: number): Promise<ReturnResDto> {
        try {
            const query = this.feedRepository.getQuery();
            const feedWhere = [
                {
                    key: 'u.id = :userId',
                    value: {
                        userId: friendId,
                    },
                },
            ];
            const [row, cnt] = await this.feedRepository.findMany(query, feedWhere);
            const items = [];
            for (let i = 0; i < row.length; i++) {
                items[i] = {
                    feedId: row[i].id,
                    image: row[i].image[0].path,
                };
            }
            return { data: { resultCode: 1, data: { items: items, count: cnt } } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1811, data: null } };
        }
    }

    // ! feed 상세보기(토큰 유무 상관 없음) - 좋아요 유무 때문
    async getFeed(userId: number, feedId: number): Promise<ReturnResDto> {
        try {
            let resultCode = 0;
            let data = null;
            const query = this.feedRepository.getQuery();
            const feedWhere = [
                {
                    key: 'f.id = :feedId',
                    value: {
                        feedId: feedId,
                    },
                },
            ];
            const feed: Feed = await this.feedRepository.findOne(query, feedWhere);
            if (feed) {
                const image = [];
                const hashtag = [];
                let liked = false;

                // ! 이미지 경로
                for (let i = 0; i < feed.image.length; i++) {
                    image.push(feed.image[i].path);
                }

                // ! feed 좋아요 유무
                if (userId) {
                    const feedLiked: FeedLiked = await this.feedLikedRepository.findOne(userId, feedId);
                    if (feedLiked) liked = true;
                }

                // ! hashtag
                for (let i = 0; i < feed.hashtag.length; i++) {
                    hashtag.push(feed.hashtag[i].name);
                }
                data = {
                    feedId: feed.id,
                    image: image,
                    mine: feed.user.id === userId ? true : false,
                    feedLiked: liked,
                    content: feed.content,
                    hashtag: hashtag,
                    commentCount: feed.comment.length,
                    likedCount: await this.feedLikedRepository.getCount(feedId),
                    createdAt: formatDateParam(feed.createdAt),
                };
                resultCode = 1;
            } else {
                resultCode = 1822;
            }
            return { data: { resultCode: resultCode, data: data } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1821, data: null } };
        }
    }

    // ! feed 수정
    async update(userId: number, feedId: number, body: UpdateFeedReqDto): Promise<ReturnResDto> {
        try {
            let resultCode = 0;
            const { content } = body;
            const feed: Feed = await this.feedRepository.findOneByIdAndUserId(userId, feedId);
            if (feed) {
                if (content && content !== feed.content) {
                    feed.content = content;
                    await this.feedRepository.save(feed);
                }
                resultCode = 1;
            } else {
                resultCode = 1832;
            }
            return { data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1831, data: null } };
        }
    }

    // ! feed 삭제
    async delete(userId: number, feedId: number): Promise<ReturnResDto> {
        try {
            let resultCode = 0;
            const feed: Feed = await this.feedRepository.findOneByIdAndUserId(userId, feedId);
            if (feed) {
                await this.feedRepository.delete(feedId, userId);
                resultCode = 1;
            } else {
                resultCode = 1842;
            }
            return { data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1841, data: null } };
        }
    }
}
