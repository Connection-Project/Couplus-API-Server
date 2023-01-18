import { RedisCacheService } from './../../cache/redisCache.service';
import { UserRepository } from '../../repositories/user.repository';
import { JwtService } from 'src/lib/jwt/jwt.service';
import { EmailLoginReqDto } from './dto/req/auth.dto';
export declare class AuthService {
    private userRepository;
    private readonly jwtServcie;
    private readonly redisCacheService;
    constructor(userRepository: UserRepository, jwtServcie: JwtService, redisCacheService: RedisCacheService);
    signIn(body: EmailLoginReqDto): Promise<any>;
    kakaoCallBack(code: string): Promise<any>;
}
