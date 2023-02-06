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
exports.BoardCommentReplyRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const BoardCommentReply_entity_1 = require("../models/BoardCommentReply.entity");
const typeorm_2 = require("typeorm");
let BoardCommentReplyRepository = class BoardCommentReplyRepository {
    constructor(boardCommentReplyRepository) {
        this.boardCommentReplyRepository = boardCommentReplyRepository;
    }
    create() {
        return this.boardCommentReplyRepository.create();
    }
    async save(boardCommentReply) {
        await this.boardCommentReplyRepository.save(boardCommentReply);
        return;
    }
    async findManyByBoardId(boardId) {
        const query = this.boardCommentReplyRepository
            .createQueryBuilder('bcr')
            .innerJoinAndSelect('bcr.comment', 'bc')
            .innerJoinAndSelect('bcr.user', 'u')
            .where('b.id = :boardId', { boardId: boardId })
            .orderBy('bc.createdAt', 'DESC');
        return query.getMany();
    }
    async findOneByIdAndUserId(replyId, userId) {
        return await this.boardCommentReplyRepository
            .createQueryBuilder('bcr')
            .innerJoinAndSelect('bcr.user', 'u')
            .where('bcr.id = :replyId', { replyId: replyId })
            .andWhere('u.id = :userId', { userId: userId })
            .getOne();
    }
    async delete(userId, replyId) {
        await this.boardCommentReplyRepository
            .createQueryBuilder('bcr')
            .delete()
            .where('id = :replyId', { replyId: replyId })
            .andWhere('userId = :userId', { userId: userId })
            .execute();
        return;
    }
};
BoardCommentReplyRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(BoardCommentReply_entity_1.BoardCommentReply)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoardCommentReplyRepository);
exports.BoardCommentReplyRepository = BoardCommentReplyRepository;
//# sourceMappingURL=boardCommentReply.repository.js.map