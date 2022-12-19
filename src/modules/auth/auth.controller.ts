import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { EmailLoginReqDto } from './dto/req/auth.dto';
import {
    EmailSignInFailDto,
    EmailSignInSuccessDto,
    InvalidPasswordDto,
    NotFoundUserDto,
} from './dto/res/signIn.res.dto';

@ApiTags('유저 인증')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/email/signIn')
    @ApiOperation({ summary: '로그인' })
    @ApiResponse({ status: 200, type: EmailSignInSuccessDto, description: '로그인 성공' })
    @ApiResponse({ status: 201, type: NotFoundUserDto, description: '계정 없음' })
    @ApiResponse({ status: 202, type: InvalidPasswordDto, description: '비밀번호 틀림' })
    @ApiResponse({ status: 401, type: EmailSignInFailDto, description: '로그인 실패' })
    async signInByEmail(@Body() body: EmailLoginReqDto) {
        return await this.authService.signIn(body);
    }
}
