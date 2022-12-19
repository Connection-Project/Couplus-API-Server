import { Body, Controller, Delete, Get, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { RegistUserReqDto } from './dto/req/create.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { EmailSignInFailDto, ExistUserDto } from './dto/res/create.res.dto';
import { getInfoFailDto, getInfoSuccessDto } from './dto/res/getInfo.res.dto';
import { UpdateUserFailDto } from './dto/res/update.res.dto';
import { UpdateUserReqDto } from './dto/req/update.dto';
import { WithdrawUserFailDto } from './dto/res/delete.res.dto';

@ApiTags('유저 정보')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('signUp/email')
    @ApiOperation({ summary: '이메일 회원가입' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '로그인 성공' })
    @ApiResponse({ status: 201, type: ExistUserDto, description: '이미 존재 하는 계정' })
    @ApiResponse({ status: 401, type: EmailSignInFailDto, description: '로그인 실패' })
    async emailSignUp(@Body() body: RegistUserReqDto) {
        return this.userService.emailSignUp(body);
    }

    @Get('info')
    @ApiOperation({ summary: '유저 정보' })
    @ApiResponse({ status: 200, type: getInfoSuccessDto, description: '유저 정보 호출 성공' })
    @ApiResponse({ status: 401, type: getInfoFailDto, description: '유저 정보 호출 실패' })
    async getInfo(@Req() req: Request) {
        return this.userService.getInfo(req.user['userId']);
    }

    @Patch('update')
    @ApiOperation({ summary: '유저 정보 수정' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '유저 정보 수정 성공' })
    @ApiResponse({ status: 401, type: UpdateUserFailDto, description: '유저 정보 수정 실패' })
    async update(@Req() req: Request, @Body() body: UpdateUserReqDto) {
        return this.userService.update(req.user['userId'], body);
    }

    @Delete('delete')
    @ApiOperation({ summary: '회원 탈퇴' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '회원 탈퇴 성공' })
    @ApiResponse({ status: 401, type: WithdrawUserFailDto, description: '회원 탈퇴 실패' })
    async delete(@Req() req: Request) {
        return this.userService.delete(req.user['userId']);
    }
}
