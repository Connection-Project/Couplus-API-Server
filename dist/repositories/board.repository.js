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
exports.BoardRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Board_entity_1 = require("../models/Board.entity");
const typeorm_2 = require("typeorm");
let BoardRepository = class BoardRepository {
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    create() {
        const board = this.boardRepository.create();
        return board;
    }
    async save(board) {
        await this.boardRepository.save(board);
        return;
    }
    getQuery() {
        return this.boardRepository
            .createQueryBuilder('b')
            .innerJoinAndSelect('b.user', 'u')
            .leftJoinAndSelect('b.image', 'bi')
            .leftJoinAndSelect('b.comment', 'bc')
            .leftJoinAndSelect('bc.reply', 'bcr');
    }
    async findMany(query, addWhere, limit) {
        for (let i = 0; i < addWhere.length; i++) {
            query.andWhere(addWhere[i].key, addWhere[i].value);
        }
        query.skip(0);
        query.take(limit);
        query.orderBy('b.createdAt', 'DESC');
        return query.getManyAndCount();
    }
    async findOne(query, addWhere) {
        for (let i = 0; i < addWhere.length; i++) {
            query.andWhere(addWhere[i].key, addWhere[i].value);
        }
        return query.getOne();
    }
    async delete(boardId, userId) {
        await this.boardRepository
            .createQueryBuilder('b')
            .delete()
            .where('id = :boardId', { boardId: boardId })
            .andWhere('userId = :userId', { userId: userId })
            .execute();
        return;
    }
    async findOneByIdAndUserId(userId, boardId) {
        return await this.boardRepository
            .createQueryBuilder('b')
            .innerJoinAndSelect('b.user', 'u')
            .where('b.id = :boardId', { boardId: boardId })
            .andWhere('u.id = :userId', { userId: userId })
            .getOne();
    }
};
BoardRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Board_entity_1.Board)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoardRepository);
exports.BoardRepository = BoardRepository;
//# sourceMappingURL=board.repository.js.map