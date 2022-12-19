import { UserRepository } from '../../repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { JwtService } from 'src/lib/jwt/jwt.service';

@Injectable()
export class AuthService {
    constructor(private userRepository: UserRepository, private readonly jwtServcie: JwtService) {}
}
