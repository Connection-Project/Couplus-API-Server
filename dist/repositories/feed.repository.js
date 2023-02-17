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
exports.FeedRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Feed_entity_1 = require("../models/Feed.entity");
const typeorm_2 = require("typeorm");
let FeedRepository = class FeedRepository {
    constructor(feedRepository) {
        this.feedRepository = feedRepository;
    }
    create() {
        const feed = this.feedRepository.create();
        return feed;
    }
    async save(feed) {
        await this.feedRepository.save(feed);
        return;
    }
    async findOneByIdAndUserId(userId, feedId) {
        return await this.feedRepository
            .createQueryBuilder('f')
            .innerJoinAndSelect('f.user', 'u')
            .where('f.id = :feedId', { feedId: feedId })
            .andWhere('u.id = :userId', { userId: userId })
            .getOne();
    }
    async delete(feedId, userId) {
        await this.feedRepository
            .createQueryBuilder('f')
            .delete()
            .where('id = :feedId', { feedId: feedId })
            .andWhere('userId = :userId', { userId: userId })
            .execute();
        return;
    }
    getQuery() {
        return this.feedRepository
            .createQueryBuilder('f')
            .innerJoinAndSelect('f.user', 'u')
            .leftJoinAndSelect('f.image', 'fi')
            .leftJoinAndSelect('f.comment', 'fc')
            .leftJoinAndSelect('f.hashtag', 'h');
    }
    async findOne(query, addWhere) {
        for (let i = 0; i < addWhere.length; i++) {
            query.andWhere(addWhere[i].key, addWhere[i].value);
        }
        return query.getOne();
    }
    async findMany(query, addWhere) {
        for (let i = 0; i < addWhere.length; i++) {
            query.andWhere(addWhere[i].key, addWhere[i].value);
        }
        query.orderBy('f.createdAt', 'DESC');
        return query.getManyAndCount();
    }
    async getCount(userId) {
        return await this.feedRepository
            .createQueryBuilder('f')
            .innerJoinAndSelect('f.user', 'u')
            .andWhere('u.id = :userId', { userId: userId })
            .getCount();
    }
};
FeedRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Feed_entity_1.Feed)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FeedRepository);
exports.FeedRepository = FeedRepository;
//# sourceMappingURL=feed.repository.js.map