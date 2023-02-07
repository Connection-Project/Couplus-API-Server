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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const board_repository_1 = require("../../repositories/board.repository");
const boardComment_repository_1 = require("../../repositories/boardComment.repository");
const user_repository_1 = require("../../repositories/user.repository");
const date_1 = require("../../utils/date");
let CommentService = class CommentService {
    constructor(boardCommentRepository, boardRepository, userRepository) {
        this.boardCommentRepository = boardCommentRepository;
        this.boardRepository = boardRepository;
        this.userRepository = userRepository;
    }
    async create(userId, body) {
        try {
            let status = 0;
            let resultCode = 0;
            const { content, boardId } = body;
            const query = this.boardRepository.getQuery();
            const boardWhere = [
                {
                    key: 'b.id = :boardId',
                    value: {
                        boardId: boardId,
                    },
                },
            ];
            const board = await this.boardRepository.findOne(query, boardWhere);
            if (!board) {
                status = 201;
                resultCode = 1502;
            }
            else {
                const user = await this.userRepository.findByKey('id', userId);
                const boardComment = this.boardCommentRepository.create();
                boardComment.board;
                boardComment.user = user;
                boardComment.content = content;
                await this.boardCommentRepository.save(boardComment);
                status = 200;
                resultCode = 1;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1501, data: null } };
        }
    }
    async getBoardComments(boardId) {
        try {
            const boardComment = await this.boardCommentRepository.findManyByBoardId(boardId);
            const items = [];
            for (let i = 0; i < boardComment.length; i++) {
                items[i] = {
                    commentId: boardComment[i].id,
                    writer: boardComment[i].user.nickName,
                    content: boardComment[i].content,
                    createdAt: (0, date_1.formatDateParam)(boardComment[i].createdAt),
                };
            }
            return { status: 200, data: { resultCode: 1, data: { items: items } } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1511, data: null } };
        }
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [boardComment_repository_1.BoardCommentRepository,
        board_repository_1.BoardRepository,
        user_repository_1.UserRepository])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map