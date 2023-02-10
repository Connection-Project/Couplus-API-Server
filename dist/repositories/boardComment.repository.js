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
exports.BoardCommentRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const BoardComment_entity_1 = require("../models/BoardComment.entity");
const typeorm_2 = require("typeorm");
let BoardCommentRepository = class BoardCommentRepository {
    constructor(boardCommentRepository) {
        this.boardCommentRepository = boardCommentRepository;
    }
    create() {
        return this.boardCommentRepository.create();
    }
    async save(boardComment) {
        return await this.boardCommentRepository.save(boardComment);
    }
    async findOneById(commentId) {
        return await this.boardCommentRepository
            .createQueryBuilder('bc')
            .where('id = :commentId', { commentId: commentId })
            .getOne();
    }
    async findManyByBoardId(boardId) {
        const query = this.boardCommentRepository
            .createQueryBuilder('bc')
            .innerJoinAndSelect('bc.board', 'b')
            .innerJoinAndSelect('bc.user', 'u')
            .where('b.id = :boardId', { boardId: boardId })
            .orderBy('bc.createdAt', 'DESC');
        return query.getMany();
    }
    async findOneByIdAndUserId(commentId, userId) {
        return await this.boardCommentRepository
            .createQueryBuilder('bc')
            .innerJoinAndSelect('bc.user', 'u')
            .where('bc.id = :commentId', { commentId: commentId })
            .andWhere('u.id = :userId', { userId: userId })
            .getOne();
    }
    async delete(userId, commentId) {
        await this.boardCommentRepository
            .createQueryBuilder('bc')
            .delete()
            .where('id = :commentId', { commentId: commentId })
            .andWhere('userId = :userId', { userId: userId })
            .execute();
        return;
    }
};
BoardCommentRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(BoardComment_entity_1.BoardComment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoardCommentRepository);
exports.BoardCommentRepository = BoardCommentRepository;
//# sourceMappingURL=boardComment.repository.js.map