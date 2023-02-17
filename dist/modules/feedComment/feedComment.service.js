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
let FeedCommentService = class FeedCommentService {
    constructor(feedRepository, feedCommentRepository, userRepository) {
        this.feedRepository = feedRepository;
        this.feedCommentRepository = feedCommentRepository;
        this.userRepository = userRepository;
    }
    async create(userId, body) {
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
                resultCode = 1;
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
                };
            }
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1911, data: null } };
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