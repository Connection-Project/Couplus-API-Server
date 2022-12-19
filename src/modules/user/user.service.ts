import { Injectable } from '@nestjs/common';
import { User } from 'src/models/User.entity';
import { UserRepository } from 'src/repositories/user.repository';
import { RegistUserReqDto } from './dto/req/create.dto';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    async emailSignUp(body: RegistUserReqDto): Promise<any> {
        try {
            const { email } = body;
            const existUser: User = await this.userRepository.findByKey('email', email);
            let status = 0;
            let resultCode = 0;
            if (existUser) {
                // * 이미 존재 하는 계정
                status = 201;
                resultCode = 1001;
            } else {
                const newUser: User = await this.userRepository.create(body);
                await this.userRepository.save(newUser);
                status = 200;
                resultCode = 1;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1002, data: null } };
        }
    }
}
