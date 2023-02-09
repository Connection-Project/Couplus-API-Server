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
exports.FeedLikedRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const FeedLiked_entity_1 = require("../models/FeedLiked.entity");
const typeorm_2 = require("typeorm");
let FeedLikedRepository = class FeedLikedRepository {
    constructor(feedLikedRepository) {
        this.feedLikedRepository = feedLikedRepository;
    }
    create() {
        const feedLiked = this.feedLikedRepository.create();
        return feedLiked;
    }
    async save(boardImage) {
        await this.feedLikedRepository.save(boardImage);
        return;
    }
    async findOne(userId, feedId) {
        return await this.feedLikedRepository
            .createQueryBuilder('fl')
            .innerJoinAndSelect('fl.user', 'u')
            .innerJoinAndSelect('fl.feed', 'f')
            .where('u.id = :userId', { userId: userId })
            .andWhere('f.id = :feedId', { feedId: feedId })
            .getOne();
    }
    async findMany(userId, boardId) {
        return await this.feedLikedRepository
            .createQueryBuilder('bl')
            .innerJoinAndSelect('bl.user', 'u')
            .innerJoinAndSelect('bl.board', 'b')
            .where('u.id = :userId', { userId: userId })
            .andWhere('b.id = :boardId', { boardId: boardId })
            .getMany();
    }
    async delete(userId, feedId) {
        await this.feedLikedRepository
            .createQueryBuilder('fl')
            .delete()
            .where('userId = :userId', { userId: userId })
            .andWhere('feedId = :feedId', { feedId: feedId })
            .execute();
        return;
    }
    async getCount(feedId) {
        return await this.feedLikedRepository
            .createQueryBuilder('fl')
            .innerJoinAndSelect('fl.feed', 'f')
            .andWhere('f.id = :feedId', { feedId: feedId })
            .getCount();
    }
};
FeedLikedRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(FeedLiked_entity_1.FeedLiked)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FeedLikedRepository);
exports.FeedLikedRepository = FeedLikedRepository;
//# sourceMappingURL=feedLiked.repository.js.map