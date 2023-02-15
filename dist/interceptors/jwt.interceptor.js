"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtInterceptor = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
let JwtInterceptor = class JwtInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['x-access-auth'];
        if (token) {
            console.log('토큰 있음');
            const jwtSecret = process.env.JWT_SECERET;
            (0, jsonwebtoken_1.verify)(token.toString(), jwtSecret, (err, user) => {
                if (err) {
                    common_1.Logger.log('INTERCEPTER - TOKEN_EXPIRE');
                    throw new common_1.ForbiddenException({
                        resultCode: -30,
                        data: null,
                    });
                }
                else {
                    request['user'] = user;
                }
            });
        }
        else {
            request['user'] = null;
        }
        return next.handle();
    }
};
JwtInterceptor = __decorate([
    (0, common_1.Injectable)()
], JwtInterceptor);
exports.JwtInterceptor = JwtInterceptor;
//# sourceMappingURL=jwt.interceptor.js.map