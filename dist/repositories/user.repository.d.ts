import { User } from 'src/models/User.entity';
import { RegistUserReqDto } from 'src/modules/user/dto/req/create.dto';
import { Repository } from 'typeorm';
export declare class UserRepository {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(body: RegistUserReqDto): User;
    findByKey(key: string, value: string | number): Promise<User>;
    delete(user: User): Promise<void>;
    save(user: User): Promise<void>;
}
