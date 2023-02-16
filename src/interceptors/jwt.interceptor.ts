import {
    CallHandler,
    ExecutionContext,
    ForbiddenException,
    Injectable,
    Logger,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { verify } from 'jsonwebtoken';

@Injectable()
export class JwtInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['x-access-auth'];
        if (token) {
            console.log('토큰 있음');
            const jwtSecret = process.env.JWT_SECERET;
            verify(token.toString(), jwtSecret, (err, user) => {
                if (err) {
                    Logger.log('INTERCEPTER - TOKEN_EXPIRE');
                    throw new ForbiddenException({
                        resultCode: -30,
                        data: null,
                    });
                } else {
                    request['user'] = user;
                }
            });
        } else {
            console.log('토큰 없음');
            request['user'] = null;
        }
        return next.handle();
    }
}
