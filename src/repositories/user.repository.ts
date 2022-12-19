import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/User.entity';
import { RegistUserReqDto } from 'src/modules/user/dto/req/create.dto';
import { GenDigestPwd } from 'src/utils/crypto';
import { generateRandomString } from 'src/utils/generateRandom';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    create(body: RegistUserReqDto): User {
        const user: User = this.userRepository.create();
        user.email = body.email;
        user.password = GenDigestPwd(body.password);
        user.name = body.name;
        user.phone = body.phone;
        user.gender = body.gender;
        user.userCode = generateRandomString();
        return user;
    }

    async findByKey(key: string, value: string | number): Promise<User> {
        return await this.userRepository.createQueryBuilder('u').where(`u.${key} = '${value}'`).getOne();
    }

    async delete(user: User): Promise<void> {
        await this.userRepository.delete(user);
    }

    async save(user: User): Promise<void> {
        await this.userRepository.save(user);
    }
}
