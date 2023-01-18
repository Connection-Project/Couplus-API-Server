import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { EmailLoginReqDto } from './dto/req/auth.dto';
import {
    EmailSignInFailDto,
    SignInSuccessDto,
    InvalidPasswordDto,
    NotFoundUserDto,
    NotFoundSocialUserDto,
    SocialSignInFailDto,
} from './dto/res/signIn.res.dto';

@ApiTags('유저 인증')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('email/signIn')
    @ApiOperation({ summary: '로그인' })
    @ApiResponse({ status: 200, type: SignInSuccessDto, description: '로그인 성공' })
    @ApiResponse({ status: 201, type: NotFoundUserDto, description: '계정 없음' })
    @ApiResponse({ status: 202, type: InvalidPasswordDto, description: '비밀번호 틀림' })
    @ApiResponse({ status: 401, type: EmailSignInFailDto, description: '로그인 실패' })
    async signInByEmail(@Body() body: EmailLoginReqDto) {
        return await this.authService.signIn(body);
    }

    @Get('kakao')
    kakao(@Res() res: Response) {
        res.redirect(
            `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_OAUTH_API_KEY}&redirect_uri=${process.env.KAKAO_OAUTH_REDIRECT_URL}&response_type=code`,
        );
    }

    @Get('kakao/oauth')
    @ApiOperation({ summary: '카카오 로그인' })
    @ApiResponse({ status: 200, type: SignInSuccessDto, description: '소셜 로그인 성공' })
    @ApiResponse({
        status: 201,
        type: NotFoundSocialUserDto,
        description: '소셜 계정 없음(추가 정보 입력 가입 필요)',
    })
    @ApiResponse({ status: 401, type: SocialSignInFailDto, description: '소셜 로그인 실패' })
    kakaoCallBack(@Query('code') code: string) {
        return this.authService.kakaoCallBack(code);
    }
}
