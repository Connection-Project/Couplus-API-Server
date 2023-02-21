import { FeedRepository } from 'src/repositories/feed.repository';
import { FeedCommentRepository } from 'src/repositories/feedComment.repository';
import { MyPetRepository } from 'src/repositories/myPet.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateFeedCommentReqDto } from './dto/req/create.req.dto';
import { UpdateFeedCommentReqDto } from './dto/req/update.req.dto';
export declare class FeedCommentService {
    private readonly feedRepository;
    private readonly feedCommentRepository;
    private readonly userRepository;
    private readonly myPetRepository;
    constructor(feedRepository: FeedRepository, feedCommentRepository: FeedCommentRepository, userRepository: UserRepository, myPetRepository: MyPetRepository);
    create(userId: number, body: CreateFeedCommentReqDto): Promise<ReturnResDto>;
    getFeedComments(userId: number, feedId: number): Promise<ReturnResDto>;
    update(userId: number, commentId: number, body: UpdateFeedCommentReqDto): Promise<ReturnResDto>;
    delete(userId: number, commentId: number): Promise<ReturnResDto>;
}
