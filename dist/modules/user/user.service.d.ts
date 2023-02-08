import { AwsService } from 'src/lib/aws/src/aws.service';
import { UserRepository } from 'src/repositories/user.repository';
import { EmailRegistUserReqDto, SocialRegistUserReqDto } from './dto/req/create.dto';
import { UpdateUserReqDto } from './dto/req/update.dto';
export declare class UserService {
    private readonly awsService;
    private userRepository;
    constructor(awsService: AwsService, userRepository: UserRepository);
    emailSignUp(file: File, body: EmailRegistUserReqDto): Promise<any>;
    socialSignUp(file: File, body: SocialRegistUserReqDto): Promise<any>;
    getInfo(userId: number): Promise<any>;
    update(userId: number, file: File, body: UpdateUserReqDto): Promise<any>;
    delete(userId: number): Promise<any>;
}
