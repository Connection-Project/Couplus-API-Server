import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Req,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { EmailRegistUserReqDto, SocialRegistUserReqDto } from './dto/req/create.dto';
import { ApiConsumes, ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { EmailSignInFailDto, ExistUserDto, SocialSignInFailDto } from './dto/res/create.res.dto';
import { GetInfoFailDto, GetInfoSuccessDto } from './dto/res/getInfo.res.dto';
import { UpdateUserFailDto } from './dto/res/update.res.dto';
import { UpdateUserReqDto } from './dto/req/update.dto';
import { WithdrawUserFailDto } from './dto/res/delete.res.dto';
import { AccessTokenGuard } from 'src/lib/jwt/guards/accessToken.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { GetManyRandomUserFailDto, GetManyRandomUserSuccessDto } from './dto/res/getManyRandom.res.dto';
import { GetProfileFailDto, GetProfileSuccessDto } from './dto/res/getProfile.res.dto';

@ApiTags('유저 정보')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('signUp/email')
    @UseInterceptors(FileInterceptor('user'))
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: '이메일 회원가입' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '이메일 회원가입 성공' })
    @ApiResponse({ status: 201, type: ExistUserDto, description: '이미 존재 하는 계정' })
    @ApiResponse({ status: 400, type: EmailSignInFailDto, description: '이메일 회원가입 실패' })
    async emailSignUp(@UploadedFile() file, @Body() body: EmailRegistUserReqDto): Promise<ReturnResDto> {
        return this.userService.emailSignUp(file, body);
    }

    @Post('signUp/social')
    @UseInterceptors(FileInterceptor('user'))
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: '소셜 회원가입' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '소셜 회원가입 성공' })
    @ApiResponse({ status: 201, type: ExistUserDto, description: '이미 존재 하는 계정(이메일 회원 존재)' })
    @ApiResponse({ status: 400, type: SocialSignInFailDto, description: '소셜 회원가입 실패' })
    async socialSignUp(@UploadedFile() file, @Body() body: SocialRegistUserReqDto): Promise<ReturnResDto> {
        return this.userService.socialSignUp(file, body);
    }

    @UseGuards(AccessTokenGuard)
    @Get('info')
    @ApiCookieAuth()
    @ApiOperation({ summary: '유저 정보' })
    @ApiResponse({ status: 200, type: GetInfoSuccessDto, description: '유저 정보 호출 성공' })
    @ApiResponse({ status: 400, type: GetInfoFailDto, description: '유저 정보 호출 실패' })
    async getInfo(@Req() req: Request): Promise<ReturnResDto> {
        return this.userService.getInfo(req.user['userId']);
    }

    @UseGuards(AccessTokenGuard)
    @Patch('update')
    @ApiCookieAuth()
    @UseInterceptors(FileInterceptor('user'))
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: '유저 정보 수정' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '유저 정보 수정 성공' })
    @ApiResponse({ status: 400, type: UpdateUserFailDto, description: '유저 정보 수정 실패' })
    async update(
        @Req() req: Request,
        @UploadedFile() file,
        @Body() body: UpdateUserReqDto,
    ): Promise<ReturnResDto> {
        return this.userService.update(req.user['userId'], file, body);
    }

    @UseGuards(AccessTokenGuard)
    @Delete('delete')
    @ApiCookieAuth()
    @ApiOperation({ summary: '회원 탈퇴' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '회원 탈퇴 성공' })
    @ApiResponse({ status: 400, type: WithdrawUserFailDto, description: '회원 탈퇴 실패' })
    async delete(@Req() req: Request): Promise<ReturnResDto> {
        return this.userService.delete(req.user['userId']);
    }

    @Get()
    @ApiOperation({ summary: '랜덤 유저 리스트' })
    @ApiResponse({ status: 200, type: GetManyRandomUserSuccessDto, description: '랜덤 유저 리스트 성공' })
    @ApiResponse({ status: 400, type: GetManyRandomUserFailDto, description: '랜덤 유저 리스트 실패' })
    async getUserRandom(): Promise<ReturnResDto> {
        return await this.userService.getUserRandom();
    }

    @Get('profile')
    @UseGuards(AccessTokenGuard)
    @ApiCookieAuth()
    @ApiOperation({ summary: '나의 프로필 정보' })
    @ApiResponse({ status: 200, type: GetProfileSuccessDto, description: '프로필 응답 성공' })
    @ApiResponse({ status: 400, type: GetProfileFailDto, description: '프로필 실패' })
    async getMyProfle(@Req() req: Request): Promise<ReturnResDto> {
        return await this.userService.getProfile(req.user['userId']);
    }

    @Get('profile/freind/:userId')
    @UseGuards(AccessTokenGuard)
    @ApiCookieAuth()
    @ApiOperation({ summary: '친구 프로필 정보' })
    @ApiResponse({ status: 200, type: GetProfileSuccessDto, description: '프로필 성공' })
    @ApiResponse({ status: 400, type: GetProfileFailDto, description: '프로필 실패' })
    async getFreindProfle(@Param('userId', ParseIntPipe) userId: number): Promise<ReturnResDto> {
        return await this.userService.getProfile(userId);
    }
}
