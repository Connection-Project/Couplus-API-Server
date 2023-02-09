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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const accessToken_guard_1 = require("../../lib/jwt/guards/accessToken.guard");
const result_res_dto_1 = require("../common/dto/res/result.res.dto");
const boardComment_service_1 = require("./boardComment.service");
const create_req_dto_1 = require("./dto/req/create.req.dto");
const update_req_dto_1 = require("./dto/req/update.req.dto");
const create_res_dto_1 = require("./dto/res/create.res.dto");
const delete_res_dto_1 = require("./dto/res/delete.res.dto");
const getComments_res_dto_1 = require("./dto/res/getComments.res.dto");
const update_res_dto_1 = require("./dto/res/update.res.dto");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async create(req, body) {
        return await this.commentService.create(req.user['userId'], body);
    }
    async getBoardComments(req, boardId) {
        return await this.commentService.getBoardComments(req.user['userId'], boardId);
    }
    async update(req, commentId, body) {
        return await this.commentService.update(req.user['userId'], commentId, body);
    }
    async delete(req, commentId) {
        return await this.commentService.delete(req.user['userId'], commentId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '게시글 댓글 등록' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '게시글 댓글 등록 성공' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: create_res_dto_1.NotFoundBoardCreateDto, description: '존재하지 않는 게시글' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: create_res_dto_1.CreateBoardCommentFailDto, description: '게시글 댓글 등록 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_req_dto_1.CreateCommentReqDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':boardId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '댓글 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getComments_res_dto_1.GetBoardCommentsSuccessDto, description: '댓글 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: getComments_res_dto_1.GetBoardCommentsFailDto, description: '댓글 리스트 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('boardId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getBoardComments", null);
__decorate([
    (0, common_1.Patch)(':commentId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '댓글 수정' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '게시글 댓글 수정 성공' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: update_res_dto_1.NotFoundBoardUpdateDto, description: '존재하지 않는 게시글' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: update_res_dto_1.UpdateBoardCommentFailDto, description: '게시글 댓글 수정 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('commentId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_req_dto_1.UpdateBoardCommentReqDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':commentId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '댓글 삭제' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '게시글 댓글 삭제 성공' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: delete_res_dto_1.NotFoundBoardDeleteDto, description: '존재하지 않는 게시글' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: delete_res_dto_1.DeleteBoardCommentFailDto, description: '게시글 댓글 삭제 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('commentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "delete", null);
CommentController = __decorate([
    (0, swagger_1.ApiTags)('게시글 댓글'),
    (0, common_1.Controller)('board/comment'),
    __metadata("design:paramtypes", [boardComment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=boardComment.controller.js.map