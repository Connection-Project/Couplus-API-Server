import { CallHandler, ExecutionContext, ForbiddenException, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { verify } from 'jsonwebtoken';

export class JwtInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> | Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['x-access-auth'];
        if (token) {
            const jwtSecret = process.env.JWT_SECERET;
            verify(token.toString(), jwtSecret, (err, user) => {
                if (err) {
                    Logger.log('INTERCEPTER - TOKEN_EXPIRE');
                    throw new ForbiddenException({
                        data: { resultCode: -30, data: null },
                    });
                } else {
                    request['user'] = user;
                }
            });
        } else {
            request['user'] = null;
        }
        return next.handle();
    }
}
