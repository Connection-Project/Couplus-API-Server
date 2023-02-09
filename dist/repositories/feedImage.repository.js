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
exports.FeedImageRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const FeedImage_entity_1 = require("../models/FeedImage.entity");
const typeorm_2 = require("typeorm");
let FeedImageRepository = class FeedImageRepository {
    constructor(feedImageRepository) {
        this.feedImageRepository = feedImageRepository;
    }
    create() {
        const feedImage = this.feedImageRepository.create();
        return feedImage;
    }
    async save(feedImage) {
        await this.feedImageRepository.save(feedImage);
        return;
    }
    async getOneByPath(path) {
        return await this.feedImageRepository
            .createQueryBuilder('fi')
            .where('path = :path', { path: path })
            .getOne();
    }
};
FeedImageRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(FeedImage_entity_1.FeedImage)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FeedImageRepository);
exports.FeedImageRepository = FeedImageRepository;
//# sourceMappingURL=feedImage.repository.js.map