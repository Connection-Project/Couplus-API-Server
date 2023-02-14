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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_dto_1 = require("./dto/req/create.dto");
const swagger_1 = require("@nestjs/swagger");
const result_res_dto_1 = require("../common/dto/res/result.res.dto");
const create_res_dto_1 = require("./dto/res/create.res.dto");
const getInfo_res_dto_1 = require("./dto/res/getInfo.res.dto");
const update_res_dto_1 = require("./dto/res/update.res.dto");
const update_dto_1 = require("./dto/req/update.dto");
const delete_res_dto_1 = require("./dto/res/delete.res.dto");
const accessToken_guard_1 = require("../../lib/jwt/guards/accessToken.guard");
const platform_express_1 = require("@nestjs/platform-express");
const getManyRandom_res_dto_1 = require("./dto/res/getManyRandom.res.dto");
const getProfile_res_dto_1 = require("./dto/res/getProfile.res.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async emailSignUp(file, body) {
        return this.userService.emailSignUp(file, body);
    }
    async socialSignUp(file, body) {
        return this.userService.socialSignUp(file, body);
    }
    async getInfo(req) {
        return this.userService.getInfo(req.user['userId']);
    }
    async update(req, file, body) {
        return this.userService.update(req.user['userId'], file, body);
    }
    async delete(req) {
        return this.userService.delete(req.user['userId']);
    }
    async getUserRandom() {
        return await this.userService.getUserRandom();
    }
    async getMyProfle(req) {
        return await this.userService.getProfile(req.user['userId']);
    }
    async getFreindProfle(userId) {
        return await this.userService.getProfile(userId);
    }
};
__decorate([
    (0, common_1.Post)('signUp/email'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('user')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: '이메일 회원가입' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '이메일 회원가입 성공' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: create_res_dto_1.ExistUserDto, description: '이미 존재 하는 계정' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: create_res_dto_1.EmailSignInFailDto, description: '이메일 회원가입 실패' }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_dto_1.EmailRegistUserReqDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "emailSignUp", null);
__decorate([
    (0, common_1.Post)('signUp/social'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('user')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: '소셜 회원가입' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '소셜 회원가입 성공' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: create_res_dto_1.ExistUserDto, description: '이미 존재 하는 계정(이메일 회원 존재)' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: create_res_dto_1.SocialSignInFailDto, description: '소셜 회원가입 실패' }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_dto_1.SocialRegistUserReqDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "socialSignUp", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Get)('info'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, swagger_1.ApiOperation)({ summary: '유저 정보' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getInfo_res_dto_1.GetInfoSuccessDto, description: '유저 정보 호출 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getInfo_res_dto_1.GetInfoFailDto, description: '유저 정보 호출 실패' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getInfo", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Patch)('update'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('user')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: '유저 정보 수정' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '유저 정보 수정 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: update_res_dto_1.UpdateUserFailDto, description: '유저 정보 수정 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, update_dto_1.UpdateUserReqDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Delete)('delete'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, swagger_1.ApiOperation)({ summary: '회원 탈퇴' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '회원 탈퇴 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: delete_res_dto_1.WithdrawUserFailDto, description: '회원 탈퇴 실패' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: '랜덤 유저 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getManyRandom_res_dto_1.GetManyRandomUserSuccessDto, description: '랜덤 유저 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getManyRandom_res_dto_1.GetManyRandomUserFailDto, description: '랜덤 유저 리스트 실패' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserRandom", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiCookieAuth)(),
    (0, swagger_1.ApiOperation)({ summary: '나의 프로필 정보' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getProfile_res_dto_1.GetProfileSuccessDto, description: '프로필 응답 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getProfile_res_dto_1.GetProfileFailDto, description: '프로필 실패' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getMyProfle", null);
__decorate([
    (0, common_1.Get)('profile/freind/:userId'),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiCookieAuth)(),
    (0, swagger_1.ApiOperation)({ summary: '친구 프로필 정보' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getProfile_res_dto_1.GetProfileSuccessDto, description: '프로필 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getProfile_res_dto_1.GetProfileFailDto, description: '프로필 실패' }),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getFreindProfle", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('유저 정보'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map