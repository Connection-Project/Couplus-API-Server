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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const redisCache_service_1 = require("./../../cache/redisCache.service");
const user_repository_1 = require("../../repositories/user.repository");
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../../lib/jwt/jwt.service");
const crypto_1 = require("../../utils/crypto");
const axios_1 = __importDefault(require("axios"));
let AuthService = class AuthService {
    constructor(userRepository, jwtServcie, redisCacheService) {
        this.userRepository = userRepository;
        this.jwtServcie = jwtServcie;
        this.redisCacheService = redisCacheService;
    }
    async signIn(body) {
        try {
            const { email, password } = body;
            const user = await this.userRepository.findByKey('email', email);
            let status = 0;
            let resultCode = 0;
            let data = null;
            if (user) {
                if ((0, crypto_1.GenDigestPwd)(password) === user.password) {
                    await this.userRepository.save(user);
                    const { accessToken, refreshToken, accessTokenExpireIn, refreshTokenExpireIn } = this.jwtServcie.getToken(user.id);
                    data = {
                        accessToken: accessToken,
                        accessTokenExpireIn: new Date(accessTokenExpireIn * 1000),
                        refreshToken: refreshToken,
                        refreshTokenExpireIn: new Date(refreshTokenExpireIn * 1000),
                    };
                    status = 200;
                    resultCode = 1;
                }
                else {
                    status = 202;
                    resultCode = 1103;
                }
            }
            else {
                status = 201;
                resultCode = 1102;
            }
            return { status: status, data: { resultCode: resultCode, data: data } };
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1101, data: null } };
        }
    }
    async kakaoCallBack(code) {
        try {
            let status = 0;
            let resultCode = 0;
            const response = await axios_1.default.post(`https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_OAUTH_API_KEY}&redirect_url=${process.env.KAKAO_OAUTH_REDIRECT_URL}&code=${code}`);
            const { access_token } = response.data;
            const userInfo = await axios_1.default.get('https://kapi.kakao.com/v2/user/me', {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
            const { id, kakao_account } = userInfo.data;
            let data = null;
            const user = await this.userRepository.findByKey('accountId', id);
            if (user) {
                const { accessToken, refreshToken } = this.jwtServcie.getToken(user.id);
                data = {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                };
                await this.redisCacheService.set(refreshToken, user.id, 604800);
                status = 200;
                resultCode = 1;
            }
            else {
                data = {
                    accountId: id,
                    nickName: kakao_account.profile.nickname,
                    email: kakao_account.email,
                };
                status = 201;
                resultCode = 1112;
            }
            return { status: status, data: { resultCode: resultCode, data: data } };
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1111, data: null } };
        }
    }
    async renewToken(body) {
        try {
            let status = 0;
            let resultCode = 0;
            let data = null;
            const { refreshToken } = body;
            const { state, user } = this.jwtServcie.verifyToken(refreshToken);
            if (state) {
                const { accessToken, refreshToken } = this.jwtServcie.getToken(user.userId);
                status = 200;
                resultCode = 1;
                data = {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                };
            }
            else {
                status = 403;
                resultCode = 9002;
            }
            return { status: status, data: { resultCode: resultCode, data: data } };
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 9001, data: null } };
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_service_1.JwtService,
        redisCache_service_1.RedisCacheService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map