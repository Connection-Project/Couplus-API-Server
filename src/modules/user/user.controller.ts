import { Body, Controller, Post } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { RegistUserReqDto } from './dto/req/create.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('signUp')
    async emailSignUp(@Body() body: RegistUserReqDto) {
        return this.userService.emailSignUp(body);
    }
}
