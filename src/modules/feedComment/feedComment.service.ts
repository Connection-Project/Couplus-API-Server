import { Injectable } from '@nestjs/common';
import { Feed } from 'src/models/Feed.entity';
import { FeedComment } from 'src/models/FeedComment.entity';
import { User } from 'src/models/User.entity';
import { FeedRepository } from 'src/repositories/feed.repository';
import { FeedCommentRepository } from 'src/repositories/feedComment.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { formatDateParam } from 'src/utils/date';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateFeedCommentReqDto } from './dto/req/create.req.dto';
import { UpdateFeedCommentReqDto } from './dto/req/update.req.dto';

@Injectable()
export class FeedCommentService {
    constructor(
        private readonly feedRepository: FeedRepository,
        private readonly feedCommentRepository: FeedCommentRepository,
        private readonly userRepository: UserRepository,
    ) {}

    async create(userId: number, body: CreateFeedCommentReqDto): Promise<ReturnResDto> {
        try {
            let resultCode = 1;
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
                    writer: feedComment[i].user.nickName,
                    content: feedComment[i].content,
                    mine: commentMine,
                    createdAt: formatDateParam(feedComment[i].createdAt),
                };
            }
            return { data: { resultCode: 1, data: { items: items } } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1911, data: null } };
        }
    }

    async update(userId: number, commentId: number, body: UpdateFeedCommentReqDto): Promise<ReturnResDto> {
        try {
            let resultCode = 1;
            const { content } = body;
            const feedComment: FeedComment = await this.feedCommentRepository.findOneByIdAndUserId(
                commentId,
                userId,
            );
            if (feedComment) {
                if (content !== '' && content !== feedComment.content) {
                    feedComment.content = content;
                    await this.feedCommentRepository.save(feedComment);
                }
            } else {
                resultCode = 1922;
            }
            return { data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1921, data: null } };
        }
    }

    async delete(userId: number, commentId: number): Promise<ReturnResDto> {
        try {
            let resultCode = 1;
            const feedComment: FeedComment = await this.feedCommentRepository.findOneByIdAndUserId(
                commentId,
                userId,
            );
            if (feedComment) {
                await this.feedCommentRepository.delete(userId, commentId);
            } else {
                resultCode = 1932;
            }
            return { data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1931, data: null } };
        }
    }
}
