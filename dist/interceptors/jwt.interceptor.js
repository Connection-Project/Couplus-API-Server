"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtInterceptor = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
class JwtInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['x-access-auth'];
        if (token) {
            const jwtSecret = process.env.JWT_SECERET;
            (0, jsonwebtoken_1.verify)(token.toString(), jwtSecret, (err, user) => {
                if (err) {
                    common_1.Logger.log('INTERCEPTER - TOKEN_EXPIRE');
                    throw new common_1.ForbiddenException({
                        data: { resultCode: -30, data: null },
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
}
exports.JwtInterceptor = JwtInterceptor;
//# sourceMappingURL=jwt.interceptor.js.map