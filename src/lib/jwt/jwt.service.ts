import { Injectable } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class JwtService {
    private readonly jwtSecret: string;
    constructor() {
        this.jwtSecret = process.env.JWT_SECERET;
    }

    getToken(userId: number) {
        const accessToken: string = sign({ userId: userId }, this.jwtSecret, { expiresIn: '1d' });
        const accessTokenVerify = this.verifyToken(accessToken);
        const refreshToken: string = sign({ userId: userId }, this.jwtSecret, {
            expiresIn: '7d',
        });
        const refreshTokenVerify = this.verifyToken(refreshToken);
        return {
            accessToken: accessToken,
            refreshToken: refreshToken,
            accessTokenExpireIn: accessTokenVerify.user.exp,
            refreshTokenExpireIn: refreshTokenVerify.user.exp,
        };
    }

    verifyToken(refreshToken: string) {
        let data = null;
        verify(refreshToken, this.jwtSecret, async (err, user) => {
            if (err) data = { state: false, user: null };
            else data = { state: true, user: user };
        });
        return data;
    }
}
