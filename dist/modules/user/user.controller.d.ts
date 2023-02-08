import { Request } from 'express';
import { UserService } from './user.service';
import { EmailRegistUserReqDto, SocialRegistUserReqDto } from './dto/req/create.dto';
import { UpdateUserReqDto } from './dto/req/update.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    emailSignUp(file: any, body: EmailRegistUserReqDto): Promise<any>;
    socialSignUp(file: any, body: SocialRegistUserReqDto): Promise<any>;
    getInfo(req: Request): Promise<any>;
    update(req: Request, file: any, body: UpdateUserReqDto): Promise<any>;
    delete(req: Request): Promise<any>;
}
