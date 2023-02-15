import { User } from 'src/models/User.entity';
import { CreateTypesDto } from 'src/modules/user/dto/types/create.types';
import { Repository, SelectQueryBuilder } from 'typeorm';
export declare class UserRepository {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(body: CreateTypesDto): User;
    findByKey(key: string, value: string | number): Promise<User>;
    delete(userId: number): Promise<void>;
    save(user: User): Promise<void>;
    getQuery(): SelectQueryBuilder<User>;
    getManyRandomUser(query: SelectQueryBuilder<User>, addWhere: any[]): Promise<User[]>;
}
