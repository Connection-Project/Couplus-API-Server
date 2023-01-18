import { RedisCacheService } from './../../cache/redisCache.service';
import { UserRepository } from '../../repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { JwtService } from 'src/lib/jwt/jwt.service';
import { EmailLoginReqDto } from './dto/req/auth.dto';
import { User } from 'src/models/User.entity';
import { GenDigestPwd } from 'src/utils/crypto';

@Injectable()
export class AuthService {
    constructor(
        private userRepository: UserRepository,
        private readonly jwtServcie: JwtService,
        private readonly redisCacheService: RedisCacheService,
    ) {}

    async signIn(body: EmailLoginReqDto): Promise<any> {
        try {
            const { email, password } = body;
            const user: User = await this.userRepository.findByKey('email', email);
            let status = 0;
            let resultCode = 0;
            let data = null;
            if (user) {
                // * 비밀번호 검증
                if (GenDigestPwd(password) === user.password) {
                    await this.userRepository.save(user);

                    const { accessToken, refreshToken } = this.jwtServcie.getToken(user.id);

                    data = {
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                    };

                    await this.redisCacheService.set(refreshToken, user.id, 604800);

                    status = 200;
                    resultCode = 1;
                } else {
                    // * 비밀번호 틀림
                    status = 202;
                    resultCode = 1103;
                }
            } else {
                // * 유저 계정 없음
                status = 201;
                resultCode = 1102;
            }
            return { status: status, data: { resultCode: resultCode, data: data } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1101, data: null } };
        }
    }
}
