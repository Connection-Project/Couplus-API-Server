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
exports.JwtService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
let JwtService = class JwtService {
    constructor() {
        this.jwtSecret = process.env.JWT_SECERET;
    }
    getToken(userId) {
        const accessToken = (0, jsonwebtoken_1.sign)({ userId: userId }, this.jwtSecret, { expiresIn: '1d' });
        const refreshToken = (0, jsonwebtoken_1.sign)({ userId: userId }, this.jwtSecret, {
            expiresIn: '7d',
        });
        return { accessToken, refreshToken };
    }
    verifyToken(refreshToken) {
        let data = null;
        (0, jsonwebtoken_1.verify)(refreshToken, this.jwtSecret, async (err, user) => {
            if (err)
                data = { state: false, user: null };
            else
                data = { state: true, user: user };
        });
        return data;
    }
};
JwtService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtService);
exports.JwtService = JwtService;
//# sourceMappingURL=jwt.service.js.map