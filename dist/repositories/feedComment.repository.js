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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedCommentRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const FeedComment_entity_1 = require("../models/FeedComment.entity");
const typeorm_2 = require("typeorm");
let FeedCommentRepository = class FeedCommentRepository {
    constructor(feedCommentRepository) {
        this.feedCommentRepository = feedCommentRepository;
    }
    create() {
        return this.feedCommentRepository.create();
    }
    async save(feedComment) {
        await this.feedCommentRepository.save(feedComment);
        return;
    }
    async findOneById(commentId) {
        return await this.feedCommentRepository
            .createQueryBuilder('fc')
            .where('id = :commentId', { commentId: commentId })
            .getOne();
    }
    async findManyByFeedId(feedId) {
        const query = this.feedCommentRepository
            .createQueryBuilder('fc')
            .innerJoinAndSelect('fc.feed', 'f')
            .innerJoinAndSelect('fc.user', 'u')
            .where('f.id = :feedId', { feedId: feedId })
            .orderBy('fc.createdAt', 'DESC');
        return query.getMany();
    }
    async findOneByIdAndUserId(commentId, userId) {
        return await this.feedCommentRepository
            .createQueryBuilder('fc')
            .innerJoinAndSelect('fc.user', 'u')
            .where('fc.id = :commentId', { commentId: commentId })
            .andWhere('u.id = :userId', { userId: userId })
            .getOne();
    }
    async delete(userId, commentId) {
        await this.feedCommentRepository
            .createQueryBuilder('fc')
            .delete()
            .where('id = :commentId', { commentId: commentId })
            .andWhere('userId = :userId', { userId: userId })
            .execute();
        return;
    }
};
FeedCommentRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(FeedComment_entity_1.FeedComment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FeedCommentRepository);
exports.FeedCommentRepository = FeedCommentRepository;
//# sourceMappingURL=feedComment.repository.js.map