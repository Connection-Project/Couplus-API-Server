"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const aws_service_1 = require("../../lib/aws/src/aws.service");
const Feed_entity_1 = require("../../models/Feed.entity");
const FeedComment_entity_1 = require("../../models/FeedComment.entity");
const FeedImage_entity_1 = require("../../models/FeedImage.entity");
const FeedLiked_entity_1 = require("../../models/FeedLiked.entity");
const HashTag_entity_1 = require("../../models/HashTag.entity");
const User_entity_1 = require("../../models/User.entity");
const feed_repository_1 = require("../../repositories/feed.repository");
const feedImage_repository_1 = require("../../repositories/feedImage.repository");
const feedLiked_repository_1 = require("../../repositories/feedLiked.repository");
const hashtag_repository_1 = require("../../repositories/hashtag.repository");
const user_repository_1 = require("../../repositories/user.repository");
const feed_controller_1 = require("./feed.controller");
const feed_service_1 = require("./feed.service");
let FeedModule = class FeedModule {
};
FeedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Feed_entity_1.Feed,
                FeedImage_entity_1.FeedImage,
                FeedComment_entity_1.FeedComment,
                FeedLiked_entity_1.FeedLiked,
                User_entity_1.User,
                HashTag_entity_1.HashTag,
                FeedLiked_entity_1.FeedLiked,
                HashTag_entity_1.HashTag,
            ]),
        ],
        controllers: [feed_controller_1.FeedController],
        providers: [
            feed_service_1.FeedService,
            aws_service_1.AwsService,
            feed_repository_1.FeedRepository,
            feedImage_repository_1.FeedImageRepository,
            feedLiked_repository_1.FeedLikedRepository,
            user_repository_1.UserRepository,
            hashtag_repository_1.HashTagRepository,
        ],
    })
], FeedModule);
exports.FeedModule = FeedModule;
//# sourceMappingURL=feed.module.js.map