import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromHeader('x-access-auth'),
            secretOrKey: process.env.JWT_SECERET,
            ignoreExpiration: false,
            passReqToCallback: true, // * request를 넘겨주도록
        });
    }

    // validate(payload: JwtPayload) {
    //     return payload;
    // }
}
