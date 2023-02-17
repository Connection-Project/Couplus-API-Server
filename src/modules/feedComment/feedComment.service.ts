import { Injectable } from '@nestjs/common';
import { Feed } from 'src/models/Feed.entity';
import { FeedComment } from 'src/models/FeedComment.entity';
import { User } from 'src/models/User.entity';
import { FeedRepository } from 'src/repositories/feed.repository';
import { FeedCommentRepository } from 'src/repositories/feedComment.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateFeedCommentReqDto } from './dto/req/create.req.dto';

@Injectable()
export class FeedCommentService {
    constructor(
        private readonly feedRepository: FeedRepository,
        private readonly feedCommentRepository: FeedCommentRepository,
        private readonly userRepository: UserRepository,
    ) {}

    async create(userId: number, body: CreateFeedCommentReqDto): Promise<ReturnResDto> {
        try {
            let resultCode = 0;
            const { content, feedId } = body;
            const query = this.feedRepository.getQuery();
            const commentWhere = [
                {
                    key: 'f.id = :feedId',
                    value: {
                        feedId: feedId,
                    },
                },
            ];
            const feed: Feed = await this.feedRepository.findOne(query, commentWhere);
            if (!feed) {
                resultCode = 1902;
            } else {
                const user: User = await this.userRepository.findByKey('id', userId);
                const feedComment: FeedComment = this.feedCommentRepository.create();
                feedComment.feed = feed;
                feedComment.user = user;
                feedComment.content = content;
                await this.feedCommentRepository.save(feedComment);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1901, data: null } };
        }
    }

    async getFeedComments(userId: number, feedId: number): Promise<ReturnResDto> {
        try {
            const feedComment: FeedComment[] = await this.feedCommentRepository.findManyByFeedId(feedId);
            const items = [];
            for (let i = 0; i < feedComment.length; i++) {
                let commentMine = false;
                if (userId && userId === feedComment[i].user.id) commentMine = true;

                items[i] = {
                    commentId: feedComment[i].id,
                };
            }
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1911, data: null } };
        }
    }
}
