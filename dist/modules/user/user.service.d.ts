import { AwsService } from 'src/lib/aws/src/aws.service';
import { FeedRepository } from 'src/repositories/feed.repository';
import { FriendRepository } from 'src/repositories/friend.repository';
import { MyPetRepository } from 'src/repositories/myPet.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { EmailRegistUserReqDto, SocialRegistUserReqDto } from './dto/req/create.dto';
import { UpdateUserReqDto } from './dto/req/update.dto';
export declare class UserService {
    private readonly awsService;
    private readonly userRepository;
    private readonly friendRepository;
    private readonly feedRepository;
    private readonly myPetRepository;
    constructor(awsService: AwsService, userRepository: UserRepository, friendRepository: FriendRepository, feedRepository: FeedRepository, myPetRepository: MyPetRepository);
    emailSignUp(file: File, body: EmailRegistUserReqDto): Promise<ReturnResDto>;
    socialSignUp(file: File, body: SocialRegistUserReqDto): Promise<ReturnResDto>;
    getInfo(userId: number): Promise<ReturnResDto>;
    update(userId: number, file: File, body: UpdateUserReqDto): Promise<ReturnResDto>;
    delete(userId: number): Promise<ReturnResDto>;
    getUserRandom(): Promise<ReturnResDto>;
    getProfile(userId: number): Promise<ReturnResDto>;
    getFriendProfile(userId: number, friendId: number): Promise<ReturnResDto>;
}
