import { AuthService } from './auth.service';
import { EmailLoginReqDto } from './dto/req/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signInByEmail(body: EmailLoginReqDto): Promise<any>;
}
