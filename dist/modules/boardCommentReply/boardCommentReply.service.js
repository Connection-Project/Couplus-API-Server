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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardcommentreplyService = void 0;
const boardComment_repository_1 = require("../../repositories/boardComment.repository");
const common_1 = require("@nestjs/common");
const boardCommentReply_repository_1 = require("../../repositories/boardCommentReply.repository");
const user_repository_1 = require("../../repositories/user.repository");
const date_1 = require("../../utils/date");
let BoardcommentreplyService = class BoardcommentreplyService {
    constructor(boardCommentRepository, boardCommentReplyRepository, userRepository) {
        this.boardCommentRepository = boardCommentRepository;
        this.boardCommentReplyRepository = boardCommentReplyRepository;
        this.userRepository = userRepository;
    }
    async create(userId, body) {
        try {
            let status = 0;
            let resultCode = 0;
            const { content, commentId } = body;
            const boardComment = await this.boardCommentRepository.findOneById(commentId);
            if (boardComment) {
                const user = await this.userRepository.findByKey('id', userId);
                const boardCommentReply = this.boardCommentReplyRepository.create();
                boardCommentReply.comment = boardComment;
                boardCommentReply.user = user;
                boardCommentReply.content = content;
                await this.boardCommentReplyRepository.save(boardCommentReply);
                status = 200;
                resultCode = 1;
            }
            else {
                status = 201;
                resultCode = 1602;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1601, data: null } };
        }
    }
    async getBoardCommentReplys(userId, commentId) {
        try {
            const boardCommentReply = await this.boardCommentReplyRepository.findManyByBoardId(commentId);
            const items = [];
            for (let i = 0; i < boardCommentReply.length; i++) {
                let mine = false;
                if (userId && userId === boardCommentReply[i].user.id)
                    mine = true;
                items[i] = {
                    replyId: boardCommentReply[i].id,
                    writer: boardCommentReply[i].user.nickName,
                    content: boardCommentReply[i].content,
                    mine: mine,
                    createdAt: (0, date_1.formatDateParam)(boardCommentReply[i].createdAt),
                };
            }
            return { status: 200, data: { resultCode: 1, data: { items: items } } };
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1611, data: null } };
        }
    }
    async update(userId, replyId, body) {
        try {
            let status = 0;
            let resultCode = 0;
            const { content } = body;
            const boardCommentReply = await this.boardCommentReplyRepository.findOneByIdAndUserId(replyId, userId);
            if (boardCommentReply) {
                if (content !== '' && content !== boardCommentReply.content) {
                    boardCommentReply.content;
                    await this.boardCommentReplyRepository.save(boardCommentReply);
                }
                status = 200;
                resultCode = 1;
            }
            else {
                status = 201;
                resultCode = 1622;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1621, data: null } };
        }
    }
    async delete(userId, replyId) {
        try {
            let status = 0;
            let resultCode = 0;
            const boardCommentReply = await this.boardCommentReplyRepository.findOneByIdAndUserId(replyId, userId);
            if (boardCommentReply) {
                await this.boardCommentReplyRepository.delete(userId, replyId);
                status = 200;
                resultCode = 1;
            }
            else {
                status = 201;
                resultCode = 1632;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1631, data: null } };
        }
    }
};
BoardcommentreplyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [boardComment_repository_1.BoardCommentRepository,
        boardCommentReply_repository_1.BoardCommentReplyRepository,
        user_repository_1.UserRepository])
], BoardcommentreplyService);
exports.BoardcommentreplyService = BoardcommentreplyService;
//# sourceMappingURL=boardCommentReply.service.js.map