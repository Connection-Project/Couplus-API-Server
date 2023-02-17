"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedCommentModule = void 0;
const common_1 = require("@nestjs/common");
const feedComment_service_1 = require("./feedComment.service");
const feedComment_controller_1 = require("./feedComment.controller");
const typeorm_1 = require("@nestjs/typeorm");
const Feed_entity_1 = require("../../models/Feed.entity");
const FeedComment_entity_1 = require("../../models/FeedComment.entity");
const User_entity_1 = require("../../models/User.entity");
const feed_repository_1 = require("../../repositories/feed.repository");
const feedComment_repository_1 = require("../../repositories/feedComment.repository");
const user_repository_1 = require("../../repositories/user.repository");
let FeedCommentModule = class FeedCommentModule {
};
FeedCommentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Feed_entity_1.Feed, FeedComment_entity_1.FeedComment, User_entity_1.User])],
        providers: [feedComment_service_1.FeedCommentService, feed_repository_1.FeedRepository, feedComment_repository_1.FeedCommentRepository, user_repository_1.UserRepository],
        controllers: [feedComment_controller_1.FeedCommentController],
    })
], FeedCommentModule);
exports.FeedCommentModule = FeedCommentModule;
//# sourceMappingURL=feedComment.module.js.map