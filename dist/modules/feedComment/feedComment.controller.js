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
exports.FeedCommentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const getUser_decorator_1 = require("../../decorator/getUser.decorator");
const jwt_interceptor_1 = require("../../interceptors/jwt.interceptor");
const accessToken_guard_1 = require("../../lib/jwt/guards/accessToken.guard");
const result_res_dto_1 = require("../common/dto/res/result.res.dto");
const create_req_dto_1 = require("./dto/req/create.req.dto");
const update_req_dto_1 = require("./dto/req/update.req.dto");
const create_res_dto_1 = require("./dto/res/create.res.dto");
const delete_res_dto_1 = require("./dto/res/delete.res.dto");
const getComments_res_dto_1 = require("./dto/res/getComments.res.dto");
const update_res_dto_1 = require("./dto/res/update.res.dto");
const feedComment_service_1 = require("./feedComment.service");
let FeedCommentController = class FeedCommentController {
    constructor(feedCommentService) {
        this.feedCommentService = feedCommentService;
    }
    async create(userId, body) {
        return await this.feedCommentService.create(userId, body);
    }
    async getFeedComments(userId, feedId) {
        return await this.feedCommentService.getFeedComments(userId, feedId);
    }
    async update(userId, commentId, body) {
        return await this.feedCommentService.update(userId, commentId, body);
    }
    async delete(userId, commentId) {
        return await this.feedCommentService.delete(userId, commentId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '피드 댓글 등록' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '피드 댓글 등록 성공' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: create_res_dto_1.NotFoundFeedCreateDto, description: '존재하지 않는 피드' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: create_res_dto_1.CreateFeedCommentFailDto, description: '피드 댓글 등록 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_req_dto_1.CreateFeedCommentReqDto]),
    __metadata("design:returntype", Promise)
], FeedCommentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':feedId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseInterceptors)(jwt_interceptor_1.JwtInterceptor),
    (0, swagger_1.ApiOperation)({ summary: '피드 댓글 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getComments_res_dto_1.GetFeedCommentsSuccessDto, description: '피드 댓글 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getComments_res_dto_1.GetFeedCommentsFailDto, description: '피드 댓글 리스트 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('feedId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FeedCommentController.prototype, "getFeedComments", null);
__decorate([
    (0, common_1.Patch)(':commentId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '피드 댓글 수정' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '피드 댓글 수정 성공' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: update_res_dto_1.NotFoundFeedUpdateDto, description: '존재하지 않는 피드' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: update_res_dto_1.UpdateFeedCommentFailDto, description: '피드 댓글 수정 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('commentId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_req_dto_1.UpdateFeedCommentReqDto]),
    __metadata("design:returntype", Promise)
], FeedCommentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':commentId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '피드 댓글 삭제' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '피드 댓글 삭제 성공' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: delete_res_dto_1.NotFoundFeedDeleteDto, description: '존재하지 않는 피드' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: delete_res_dto_1.DeleteFeedCommentFailDto, description: '피드 댓글 삭제 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('commentId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FeedCommentController.prototype, "delete", null);
FeedCommentController = __decorate([
    (0, swagger_1.ApiTags)('피드 댓글'),
    (0, common_1.Controller)('feed/comment'),
    __metadata("design:paramtypes", [feedComment_service_1.FeedCommentService])
], FeedCommentController);
exports.FeedCommentController = FeedCommentController;
//# sourceMappingURL=feedComment.controller.js.map