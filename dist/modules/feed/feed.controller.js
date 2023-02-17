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
exports.FeedController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const getUser_decorator_1 = require("../../decorator/getUser.decorator");
const jwt_interceptor_1 = require("../../interceptors/jwt.interceptor");
const accessToken_guard_1 = require("../../lib/jwt/guards/accessToken.guard");
const result_res_dto_1 = require("../common/dto/res/result.res.dto");
const create_req_dto_1 = require("./dto/req/create.req.dto");
const update_req_dto_1 = require("./dto/req/update.req.dto");
const create_res_dto_1 = require("./dto/res/create.res.dto");
const delete_res_dto_1 = require("./dto/res/delete.res.dto");
const getFeed_res_dto_1 = require("./dto/res/getFeed.res.dto");
const getFeeds_res_dto_1 = require("./dto/res/getFeeds.res.dto");
const update_res_dto_1 = require("./dto/res/update.res.dto");
const feed_service_1 = require("./feed.service");
let FeedController = class FeedController {
    constructor(feedService) {
        this.feedService = feedService;
    }
    async create(userId, files, body) {
        console.log(body);
        return await this.feedService.create(userId, files, body);
    }
    async getMyFeeds(userId) {
        return await this.feedService.getMyFeeds(userId);
    }
    async getfriendFeeds(userId) {
        return await this.feedService.getfriendFeeds(userId);
    }
    async update(userId, feedId, body) {
        return await this.feedService.update(userId, feedId, body);
    }
    async getFeed(userId, feedId) {
        return await this.feedService.getFeed(userId, feedId);
    }
    async delete(userId, feedId) {
        return await this.feedService.delete(userId, feedId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('feed')),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: '피드 등록' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '피드 등록 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: create_res_dto_1.CreateFeedFailDto, description: '피드 등록 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array, create_req_dto_1.CreateFeedReqDto]),
    __metadata("design:returntype", Promise)
], FeedController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '나의 피드 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getFeeds_res_dto_1.GetFeedsSuccessDto, description: '나의 피드 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getFeeds_res_dto_1.GetFeedsFailDto, description: '나의 피드 리스트 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FeedController.prototype, "getMyFeeds", null);
__decorate([
    (0, common_1.Get)('friend/:userId'),
    (0, swagger_1.ApiOperation)({ summary: '친구 피드 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getFeeds_res_dto_1.GetFeedsSuccessDto, description: '친구 피드 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getFeeds_res_dto_1.GetFeedsFailDto, description: '친구 피드 리스트 실패' }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FeedController.prototype, "getfriendFeeds", null);
__decorate([
    (0, common_1.Patch)(':feedId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '나의 피드 수정' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '피드 수정 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: update_res_dto_1.UpdateFeedFailDto, description: '피드 수정 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('feedId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_req_dto_1.UpdateFeedReqDto]),
    __metadata("design:returntype", Promise)
], FeedController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(':feedId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseInterceptors)(jwt_interceptor_1.JwtInterceptor),
    (0, swagger_1.ApiOperation)({ summary: '피드 상세보기' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getFeed_res_dto_1.GetFeedSuccessDto, description: '피드 상세보기 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getFeed_res_dto_1.GetFeedFailDto, description: '피드 상세보기 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('feedId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FeedController.prototype, "getFeed", null);
__decorate([
    (0, common_1.Delete)(':feedId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '나의 피드 삭제하기' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '피드 삭제 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: delete_res_dto_1.DeleteFeedFailDto, description: '피드 삭제 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('feedId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FeedController.prototype, "delete", null);
FeedController = __decorate([
    (0, swagger_1.ApiTags)('피드 관리'),
    (0, common_1.Controller)('feed'),
    __metadata("design:paramtypes", [feed_service_1.FeedService])
], FeedController);
exports.FeedController = FeedController;
//# sourceMappingURL=feed.controller.js.map