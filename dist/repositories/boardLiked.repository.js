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
exports.BoardLikedRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const BoardLiked_entity_1 = require("../models/BoardLiked.entity");
const typeorm_2 = require("typeorm");
let BoardLikedRepository = class BoardLikedRepository {
    constructor(boardLikedRepository) {
        this.boardLikedRepository = boardLikedRepository;
    }
    create() {
        const boardLiked = this.boardLikedRepository.create();
        return boardLiked;
    }
    async save(boardImage) {
        await this.boardLikedRepository.save(boardImage);
        return;
    }
    async findOne(userId, boardId) {
        return await this.boardLikedRepository
            .createQueryBuilder('bl')
            .innerJoinAndSelect('bl.user', 'u')
            .innerJoinAndSelect('bl.board', 'b')
            .where('u.id = :userId', { userId: userId })
            .andWhere('b.id = :boardId', { boardId: boardId })
            .getOne();
    }
    async findMany(userId, boardId) {
        return await this.boardLikedRepository
            .createQueryBuilder('bl')
            .innerJoinAndSelect('bl.user', 'u')
            .innerJoinAndSelect('bl.board', 'b')
            .where('u.id = :userId', { userId: userId })
            .andWhere('b.id = :boardId', { boardId: boardId })
            .getMany();
    }
    async delete(userId, boardId) {
        await this.boardLikedRepository
            .createQueryBuilder('bl')
            .delete()
            .where('userId = :userId', { userId: userId })
            .andWhere('boardId = :boardId', { boardId: boardId })
            .execute();
        return;
    }
    async getCount(boardId) {
        return await this.boardLikedRepository
            .createQueryBuilder('bl')
            .innerJoinAndSelect('bl.board', 'b')
            .andWhere('b.id = :boardId', { boardId: boardId })
            .getCount();
    }
};
BoardLikedRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(BoardLiked_entity_1.BoardLiked)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoardLikedRepository);
exports.BoardLikedRepository = BoardLikedRepository;
//# sourceMappingURL=boardLiked.repository.js.map