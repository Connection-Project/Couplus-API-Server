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
exports.HashTagRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const HashTag_entity_1 = require("../models/HashTag.entity");
const typeorm_2 = require("typeorm");
let HashTagRepository = class HashTagRepository {
    constructor(hashtagRepository) {
        this.hashtagRepository = hashtagRepository;
    }
    create() {
        const hashtag = this.hashtagRepository.create();
        return hashtag;
    }
    async save(hashtag) {
        await this.hashtagRepository.save(hashtag);
        return;
    }
    async findManyByFeedId(feedId) {
        return await this.hashtagRepository
            .createQueryBuilder('h')
            .innerJoinAndSelect('h.feed', 'f')
            .where('f.id = :feedId', { feedId: feedId })
            .getMany();
    }
    async delete(hashtagId) {
        await this.hashtagRepository
            .createQueryBuilder('h')
            .delete()
            .where('id = :hashtagId', { hashtagId: hashtagId })
            .execute();
        return;
    }
};
HashTagRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(HashTag_entity_1.HashTag)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HashTagRepository);
exports.HashTagRepository = HashTagRepository;
//# sourceMappingURL=hashtag.repository.js.map