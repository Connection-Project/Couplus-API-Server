import { Response } from 'express';
import { AuthService } from './auth.service';
import { EmailLoginReqDto } from './dto/req/auth.req.dto';
import { RenewTokenReqDto } from './dto/req/renew.req.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signInByEmail(body: EmailLoginReqDto): Promise<any>;
    kakao(res: Response): void;
    kakaoCallBack(code: string, res: Response): Promise<void>;
    renewToken(body: RenewTokenReqDto): Promise<any>;
}
