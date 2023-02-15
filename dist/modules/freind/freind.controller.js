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
exports.FriendController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const getUser_decorator_1 = require("../../decorator/getUser.decorator");
const accessToken_guard_1 = require("../../lib/jwt/guards/accessToken.guard");
const result_res_dto_1 = require("../common/dto/res/result.res.dto");
const create_req_dto_1 = require("./dto/req/create.req.dto");
const create_res_dto_1 = require("./dto/res/create.res.dto");
const delete_res_dto_1 = require("./dto/res/delete.res.dto");
const getConfirm_res_dto_1 = require("./dto/res/getConfirm.res.dto");
const getRequests_res_dto_1 = require("./dto/res/getRequests.res.dto");
const freind_service_1 = require("./freind.service");
let FriendController = class FriendController {
    constructor(friendService) {
        this.friendService = friendService;
    }
    async create(req, body) {
        return await this.friendService.create(req.user['userId'], body);
    }
    async requestConfirm(userId, friendId) {
        return await this.friendService.requestConfirm(userId, friendId);
    }
    async getRequests(req) {
        return await this.friendService.getRequests(req.user['userId']);
    }
    async delete(req, friendId) {
        return await this.friendService.delete(req.user['userId'], friendId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '친구 요청' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '친구 요청 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: create_res_dto_1.CreatefriendFailDto, description: '친구 요청 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_req_dto_1.CreatefriendReqDto]),
    __metadata("design:returntype", Promise)
], FriendController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('confirmed/:friendId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '친구 요청 수락' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '친구 요청 수락 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getConfirm_res_dto_1.ConfirmRequestfriendFailDto, description: '친구 요청 수락 실패' }),
    __param(0, (0, getUser_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('friendId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FriendController.prototype, "requestConfirm", null);
__decorate([
    (0, common_1.Get)('request'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '친구 요청 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getRequests_res_dto_1.GetRequestfriendSuccessDto, description: '친구 요청 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getRequests_res_dto_1.GetRequestfriendFailDto, description: '친구 요청 리스트 실패' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FriendController.prototype, "getRequests", null);
__decorate([
    (0, common_1.Delete)(':friendId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '친구 삭제' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '친구 삭제 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: delete_res_dto_1.DeletefriendFailDto, description: '친구 삭제 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('friendId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], FriendController.prototype, "delete", null);
FriendController = __decorate([
    (0, swagger_1.ApiTags)('친구 관리'),
    (0, common_1.Controller)('friend'),
    __metadata("design:paramtypes", [freind_service_1.FriendService])
], FriendController);
exports.FriendController = FriendController;
//# sourceMappingURL=freind.controller.js.map