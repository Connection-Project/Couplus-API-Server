import { UserRepository } from 'src/repositories/user.repository';
import { RegistUserReqDto } from './dto/req/create.dto';
import { UpdateUserReqDto } from './dto/req/update.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    emailSignUp(body: RegistUserReqDto): Promise<any>;
    getInfo(userId: number): Promise<any>;
    update(userId: number, body: UpdateUserReqDto): Promise<any>;
    delete(userId: number): Promise<any>;
}
