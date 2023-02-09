"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardCommentReplyModule = void 0;
const common_1 = require("@nestjs/common");
const boardCommentReply_service_1 = require("./boardCommentReply.service");
const boardCommentReply_controller_1 = require("./boardCommentReply.controller");
const typeorm_1 = require("@nestjs/typeorm");
const BoardComment_entity_1 = require("../../models/BoardComment.entity");
const BoardCommentReply_entity_1 = require("../../models/BoardCommentReply.entity");
const User_entity_1 = require("../../models/User.entity");
const boardComment_repository_1 = require("../../repositories/boardComment.repository");
const boardCommentReply_repository_1 = require("../../repositories/boardCommentReply.repository");
const user_repository_1 = require("../../repositories/user.repository");
let BoardCommentReplyModule = class BoardCommentReplyModule {
};
BoardCommentReplyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([BoardComment_entity_1.BoardComment, BoardCommentReply_entity_1.BoardCommentReply, User_entity_1.User])],
        providers: [
            boardCommentReply_service_1.BoardcommentreplyService,
            boardComment_repository_1.BoardCommentRepository,
            boardCommentReply_repository_1.BoardCommentReplyRepository,
            user_repository_1.UserRepository,
        ],
        controllers: [boardCommentReply_controller_1.BoardcommentreplyController],
    })
], BoardCommentReplyModule);
exports.BoardCommentReplyModule = BoardCommentReplyModule;
//# sourceMappingURL=boardCommentReply.module.js.map