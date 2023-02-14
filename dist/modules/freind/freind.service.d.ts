import { FreindRepository } from 'src/repositories/freind.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateFreindReqDto } from './dto/req/create.req.dto';
export declare class FreindService {
    private readonly freindRepository;
    private readonly userRepository;
    constructor(freindRepository: FreindRepository, userRepository: UserRepository);
    create(userId: number, body: CreateFreindReqDto): Promise<ReturnResDto>;
    requestConfirm(userId: number, freindId: number): Promise<ReturnResDto>;
    getRequests(userId: number): Promise<ReturnResDto>;
    delete(userId: number, freindId: number): Promise<ReturnResDto>;
}
