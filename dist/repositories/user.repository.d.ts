import { User } from 'src/models/User.entity';
import { CreateTypesDto } from 'src/modules/user/dto/types/create.types';
import { Repository } from 'typeorm';
export declare class UserRepository {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(body: CreateTypesDto): User;
    findByKey(key: string, value: string | number): Promise<User>;
    delete(userId: number): Promise<void>;
    save(user: User): Promise<void>;
    getManyRandomUser(): Promise<User[]>;
}
