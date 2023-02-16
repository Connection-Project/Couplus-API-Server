import { UserService } from './user.service';
import { EmailRegistUserReqDto, SocialRegistUserReqDto } from './dto/req/create.dto';
import { UpdateUserReqDto } from './dto/req/update.dto';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    emailSignUp(file: any, body: EmailRegistUserReqDto): Promise<ReturnResDto>;
    socialSignUp(file: any, body: SocialRegistUserReqDto): Promise<ReturnResDto>;
    getInfo(userId: number): Promise<ReturnResDto>;
    update(userId: number, file: any, body: UpdateUserReqDto): Promise<ReturnResDto>;
    delete(userId: number): Promise<ReturnResDto>;
    getUserRandom(userId: number): Promise<ReturnResDto>;
    getMyProfle(userId: number): Promise<ReturnResDto>;
    getfriendProfle(userId: number, friendId: number): Promise<ReturnResDto>;
}
