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
exports.BoardcommentreplyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const accessToken_guard_1 = require("../../lib/jwt/guards/accessToken.guard");
const update_res_dto_1 = require("../boardComment/dto/res/update.res.dto");
const result_res_dto_1 = require("../common/dto/res/result.res.dto");
const boardCommentReply_service_1 = require("./boardCommentReply.service");
const create_req_dto_1 = require("./dto/req/create.req.dto");
const update_req_dto_1 = require("./dto/req/update.req.dto");
const create_res_dto_1 = require("./dto/res/create.res.dto");
const delete_res_dto_1 = require("./dto/res/delete.res.dto");
const getReplys_res_dto_1 = require("./dto/res/getReplys.res.dto");
const update_res_dto_2 = require("./dto/res/update.res.dto");
let BoardcommentreplyController = class BoardcommentreplyController {
    constructor(boardCommentReplyService) {
        this.boardCommentReplyService = boardCommentReplyService;
    }
    async create(req, body) {
        return await this.boardCommentReplyService.create(req.user['userId'], body);
    }
    async getBoardComments(req, commentId) {
        return await this.boardCommentReplyService.getBoardCommentReplys(req.user['userId'], commentId);
    }
    async update(req, replyId, body) {
        return await this.boardCommentReplyService.update(req.user['userId'], replyId, body);
    }
    async delete(req, replyId) {
        return await this.boardCommentReplyService.delete(req.user['userId'], replyId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '게시글 댓글 등록' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '게시글 댓글 등록 성공' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: create_res_dto_1.NotFoundReplyCreateDto, description: '존재하지 않는 댓글' }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        type: create_res_dto_1.CreateBoardCommentReplyFailDto,
        description: '게시글 대댓글 등록 실패',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_req_dto_1.CreateBoardCommentReplyReqDto]),
    __metadata("design:returntype", Promise)
], BoardcommentreplyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':commentId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '대댓글 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getReplys_res_dto_1.GetBoardCommentsSuccessDto, description: '대댓글 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getReplys_res_dto_1.GetBoardCommentReplysFailDto, description: '대댓글 리스트 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('commentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], BoardcommentreplyController.prototype, "getBoardComments", null);
__decorate([
    (0, common_1.Patch)(':replyId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '대댓글 수정' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '대댓글 수정 성공' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: update_res_dto_2.NotFoundReplyUpdateDto, description: '존재하지 않는 댓글' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: update_res_dto_1.UpdateBoardCommentFailDto, description: '대댓글 수정 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('replyId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_req_dto_1.UpdateBoardCommentReplyDto]),
    __metadata("design:returntype", Promise)
], BoardcommentreplyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':replyId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '대댓글 삭제' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '대댓글 삭제 성공' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: delete_res_dto_1.NotFoundReplyDeleteDto, description: '존재하지 않는 댓글' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: delete_res_dto_1.DeleteBoardCommentReplyFailDto, description: '대댓글 삭제 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('replyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], BoardcommentreplyController.prototype, "delete", null);
BoardcommentreplyController = __decorate([
    (0, common_1.Controller)('board/comment/reply'),
    __metadata("design:paramtypes", [boardCommentReply_service_1.BoardcommentreplyService])
], BoardcommentreplyController);
exports.BoardcommentreplyController = BoardcommentreplyController;
//# sourceMappingURL=boardCommentReply.controller.js.map