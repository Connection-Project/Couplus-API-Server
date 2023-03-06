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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const auth_req_dto_1 = require("./dto/req/auth.req.dto");
const renew_req_dto_1 = require("./dto/req/renew.req.dto");
const renew_res_dto_1 = require("./dto/res/renew.res.dto");
const signIn_res_dto_1 = require("./dto/res/signIn.res.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signInByEmail(body) {
        return await this.authService.signIn(body);
    }
    kakao(res) {
        res.redirect(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_OAUTH_API_KEY}&redirect_uri=${process.env.KAKAO_OAUTH_REDIRECT_URL}&response_type=code`);
    }
    async kakaoCallBack(code, res) {
        const result = await this.authService.kakaoCallBack(code);
        if (result.data.resultCode === 1112) {
            console.log(`${process.env.REDIRECT_URL}?resultCode=${result.data.resultCode}&accountId=${result.data.data.accountId}&nickName=${result.data.data.nickName}&email=${result.data.data.email}`);
            res.redirect(`${process.env.ADD_INFO_REDIRECT_URL}?resultCode=${result.data.resultCode}&accountId=${result.data.data.accountId}&nickName=${result.data.data.nickName}&email=${result.data.data.email}`);
        }
        else {
            res.redirect(`${process.env.REDIRECT_URL}?resultCode=${result.data.resultCode}&accessToken=${result.data.data.accessToken}&refreshToken=${result.data.data.refreshToken}&accessTokenExpireIn=${result.data.data.accessTokenExpireIn}&refreshTokenExpireIn=${result.data.data.refreshTokenExpireIn}`);
        }
    }
    async renewToken(body) {
        return await this.authService.renewToken(body);
    }
};
__decorate([
    (0, common_1.Post)('email/signIn'),
    (0, swagger_1.ApiOperation)({ summary: '로그인' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: signIn_res_dto_1.SignInSuccessDto, description: '로그인 성공' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: signIn_res_dto_1.NotFoundUserDto, description: '계정 없음' }),
    (0, swagger_1.ApiResponse)({ status: 202, type: signIn_res_dto_1.InvalidPasswordDto, description: '비밀번호 틀림' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: signIn_res_dto_1.EmailSignInFailDto, description: '로그인 실패' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_req_dto_1.EmailLoginReqDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signInByEmail", null);
__decorate([
    (0, common_1.Get)('kakao'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "kakao", null);
__decorate([
    (0, common_1.Get)('kakao/oauth'),
    (0, swagger_1.ApiOperation)({ summary: '카카오 로그인' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: signIn_res_dto_1.SignInSuccessDto, description: '소셜 로그인 성공' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: signIn_res_dto_1.NotFoundSocialUserDto,
        description: '소셜 계정 없음(추가 정보 입력 가입 필요)',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, type: signIn_res_dto_1.SocialSignInFailDto, description: '소셜 로그인 실패' }),
    __param(0, (0, common_1.Query)('code')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "kakaoCallBack", null);
__decorate([
    (0, common_1.Post)('renew'),
    (0, swagger_1.ApiOperation)({ summary: '토큰갱신 (리프레쉬 토큰 필요)' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: renew_res_dto_1.RenewSuccessDto, description: '토큰 갱신 성공' }),
    (0, swagger_1.ApiResponse)({ status: 403, type: renew_res_dto_1.RefreshTokenExpireDto, description: '리프레쉬 토큰 만료' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: renew_res_dto_1.RenewTokenFailDto, description: '토큰 갱신 실패' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [renew_req_dto_1.RenewTokenReqDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "renewToken", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('유저 인증'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map