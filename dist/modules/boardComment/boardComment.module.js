"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModule = void 0;
const common_1 = require("@nestjs/common");
const boardComment_service_1 = require("./boardComment.service");
const boardComment_controller_1 = require("./boardComment.controller");
const typeorm_1 = require("@nestjs/typeorm");
const BoardComment_entity_1 = require("../../models/BoardComment.entity");
const Board_entity_1 = require("../../models/Board.entity");
const board_repository_1 = require("../../repositories/board.repository");
const boardComment_repository_1 = require("../../repositories/boardComment.repository");
const User_entity_1 = require("../../models/User.entity");
const user_repository_1 = require("../../repositories/user.repository");
const boardCommentReply_repository_1 = require("../../repositories/boardCommentReply.repository");
const BoardCommentReply_entity_1 = require("../../models/BoardCommentReply.entity");
let CommentModule = class CommentModule {
};
CommentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([BoardComment_entity_1.BoardComment, Board_entity_1.Board, BoardCommentReply_entity_1.BoardCommentReply, User_entity_1.User])],
        providers: [
            boardComment_service_1.CommentService,
            board_repository_1.BoardRepository,
            boardComment_repository_1.BoardCommentRepository,
            boardCommentReply_repository_1.BoardCommentReplyRepository,
            user_repository_1.UserRepository,
        ],
        controllers: [boardComment_controller_1.CommentController],
    })
], CommentModule);
exports.CommentModule = CommentModule;
//# sourceMappingURL=boardComment.module.js.map