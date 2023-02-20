"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedCommentService = void 0;
const common_1 = require("@nestjs/common");
const feed_repository_1 = require("../../repositories/feed.repository");
const feedComment_repository_1 = require("../../repositories/feedComment.repository");
const user_repository_1 = require("../../repositories/user.repository");
const date_1 = require("../../utils/date");
let FeedCommentService = class FeedCommentService {
    constructor(feedRepository, feedCommentRepository, userRepository) {
        this.feedRepository = feedRepository;
        this.feedCommentRepository = feedCommentRepository;
        this.userRepository = userRepository;
    }
    async create(userId, body) {
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
            const feed = await this.feedRepository.findOne(query, commentWhere);
            if (!feed) {
                resultCode = 1902;
            }
            else {
                const user = await this.userRepository.findByKey('id', userId);
                const feedComment = this.feedCommentRepository.create();
                feedComment.feed = feed;
                feedComment.user = user;
                feedComment.content = content;
                await this.feedCommentRepository.save(feedComment);
            }
            return { data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1901, data: null } };
        }
    }
    async getFeedComments(userId, feedId) {
        try {
            const feedComment = await this.feedCommentRepository.findManyByFeedId(feedId);
            const items = [];
            for (let i = 0; i < feedComment.length; i++) {
                let commentMine = false;
                if (userId && userId === feedComment[i].user.id)
                    commentMine = true;
                items[i] = {
                    commentId: feedComment[i].id,
                    writer: feedComment[i].user.nickName,
                    content: feedComment[i].content,
                    mine: commentMine,
                    createdAt: (0, date_1.formatDateParam)(feedComment[i].createdAt),
                };
            }
            return { data: { resultCode: 1, data: { items: items } } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1911, data: null } };
        }
    }
    async update(userId, commentId, body) {
        try {
            let resultCode = 1;
            const { content } = body;
            const feedComment = await this.feedCommentRepository.findOneByIdAndUserId(commentId, userId);
            if (feedComment) {
                if (content !== '' && content !== feedComment.content) {
                    feedComment.content = content;
                    await this.feedCommentRepository.save(feedComment);
                }
            }
            else {
                resultCode = 1922;
            }
            return { data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1921, data: null } };
        }
    }
    async delete(userId, commentId) {
        try {
            let resultCode = 1;
            const feedComment = await this.feedCommentRepository.findOneByIdAndUserId(commentId, userId);
            if (feedComment) {
                await this.feedCommentRepository.delete(userId, commentId);
            }
            else {
                resultCode = 1932;
            }
            return { data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1931, data: null } };
        }
    }
};
FeedCommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [feed_repository_1.FeedRepository,
        feedComment_repository_1.FeedCommentRepository,
        user_repository_1.UserRepository])
], FeedCommentService);
exports.FeedCommentService = FeedCommentService;
//# sourceMappingURL=feedComment.service.js.map