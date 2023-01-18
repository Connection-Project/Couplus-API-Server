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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const redisCache_service_1 = require("./../../cache/redisCache.service");
const user_repository_1 = require("../../repositories/user.repository");
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../../lib/jwt/jwt.service");
const crypto_1 = require("../../utils/crypto");
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
            return { status: 401, data: { resultCode: 1101, data: null } };
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