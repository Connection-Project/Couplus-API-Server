import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AccessTokenGuard extends AuthGuard('jwt') {
    handleRequest(err: any, user: any) {
        // You can throw an exception based on either "info" or "err" arguments
        if (user) {
            console.log(user);
            return user;
        } else {
            console.log(err);
            throw new UnauthorizedException({
                resultCode: -30,
                data: 'TOKEN EXPIRE',
            });
        }
    }
}
