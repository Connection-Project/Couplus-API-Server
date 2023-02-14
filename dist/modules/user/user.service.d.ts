import { AwsService } from 'src/lib/aws/src/aws.service';
import { FreindRepository } from 'src/repositories/freind.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { EmailRegistUserReqDto, SocialRegistUserReqDto } from './dto/req/create.dto';
import { UpdateUserReqDto } from './dto/req/update.dto';
export declare class UserService {
    private readonly awsService;
    private readonly userRepository;
    private readonly freindRepository;
    constructor(awsService: AwsService, userRepository: UserRepository, freindRepository: FreindRepository);
    emailSignUp(file: File, body: EmailRegistUserReqDto): Promise<ReturnResDto>;
    socialSignUp(file: File, body: SocialRegistUserReqDto): Promise<ReturnResDto>;
    getInfo(userId: number): Promise<ReturnResDto>;
    update(userId: number, file: File, body: UpdateUserReqDto): Promise<ReturnResDto>;
    delete(userId: number): Promise<ReturnResDto>;
    getUserRandom(): Promise<ReturnResDto>;
}
