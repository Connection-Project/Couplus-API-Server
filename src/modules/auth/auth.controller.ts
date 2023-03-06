import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { EmailLoginReqDto } from './dto/req/auth.req.dto';
import { RenewTokenReqDto } from './dto/req/renew.req.dto';
import { RefreshTokenExpireDto, RenewSuccessDto, RenewTokenFailDto } from './dto/res/renew.res.dto';
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
    @ApiResponse({ status: 400, type: EmailSignInFailDto, description: '로그인 실패' })
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
    @ApiResponse({ status: 400, type: SocialSignInFailDto, description: '소셜 로그인 실패' })
    async kakaoCallBack(@Query('code') code: string, @Res() res: Response) {
        const result = await this.authService.kakaoCallBack(code);
        if (result.data.resultCode === 1112) {
            console.log(
                `${process.env.REDIRECT_URL}?resultCode=${result.data.resultCode}&accountId=${result.data.data.accountId}&nickName=${result.data.data.nickName}&email=${result.data.data.email}`,
            );
            res.redirect(
                `${process.env.ADD_INFO_REDIRECT_URL}?resultCode=${result.data.resultCode}&accountId=${result.data.data.accountId}&nickName=${result.data.data.nickName}&email=${result.data.data.email}`,
            );
        } else {
            res.redirect(
                `${process.env.REDIRECT_URL}?resultCode=${result.data.resultCode}&accessToken=${result.data.data.accessToken}&refreshToken=${result.data.data.refreshToken}&accessTokenExpireIn=${result.data.data.accessTokenExpireIn}&refreshTokenExpireIn=${result.data.data.refreshTokenExpireIn}`,
            );
        }
    }

    @Post('renew')
    @ApiOperation({ summary: '토큰갱신 (리프레쉬 토큰 필요)' })
    @ApiResponse({ status: 200, type: RenewSuccessDto, description: '토큰 갱신 성공' })
    @ApiResponse({ status: 403, type: RefreshTokenExpireDto, description: '리프레쉬 토큰 만료' })
    @ApiResponse({ status: 400, type: RenewTokenFailDto, description: '토큰 갱신 실패' })
    async renewToken(@Body() body: RenewTokenReqDto) {
        return await this.authService.renewToken(body);
    }
}
