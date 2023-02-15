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
    UseGuards,
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { GetUser } from 'src/decorator/getUser.decorator';
import { AccessTokenGuard } from 'src/lib/jwt/guards/accessToken.guard';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreatefriendReqDto } from './dto/req/create.req.dto';
import { CreatefriendFailDto } from './dto/res/create.res.dto';
import { DeletefriendFailDto } from './dto/res/delete.res.dto';
import { ConfirmRequestfriendFailDto } from './dto/res/getConfirm.res.dto';
import { GetRequestfriendFailDto, GetRequestfriendSuccessDto } from './dto/res/getRequests.res.dto';
import { FriendService } from './freind.service';

@ApiTags('친구 관리')
@Controller('friend')
export class FriendController {
    constructor(private friendService: FriendService) {}

    @Post()
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '친구 요청' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '친구 요청 성공' })
    @ApiResponse({ status: 400, type: CreatefriendFailDto, description: '친구 요청 실패' })
    async create(@Req() req: Request, @Body() body: CreatefriendReqDto): Promise<ReturnResDto> {
        return await this.friendService.create(req.user['userId'], body);
    }

    @Patch('confirmed/:friendId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '친구 요청 수락' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '친구 요청 수락 성공' })
    @ApiResponse({ status: 400, type: ConfirmRequestfriendFailDto, description: '친구 요청 수락 실패' })
    async requestConfirm(
        @GetUser() userId: number,
        @Param('friendId', ParseIntPipe) friendId: number,
    ): Promise<ReturnResDto> {
        return await this.friendService.requestConfirm(userId, friendId);
    }

    @Get('request')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '친구 요청 리스트' })
    @ApiResponse({ status: 200, type: GetRequestfriendSuccessDto, description: '친구 요청 리스트 성공' })
    @ApiResponse({ status: 400, type: GetRequestfriendFailDto, description: '친구 요청 리스트 실패' })
    async getRequests(@Req() req: Request): Promise<ReturnResDto> {
        return await this.friendService.getRequests(req.user['userId']);
    }

    @Delete(':friendId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '친구 삭제' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '친구 삭제 성공' })
    @ApiResponse({ status: 400, type: DeletefriendFailDto, description: '친구 삭제 실패' })
    async delete(
        @Req() req: Request,
        @Param('friendId', ParseIntPipe) friendId: number,
    ): Promise<ReturnResDto> {
        return await this.friendService.delete(req.user['userId'], friendId);
    }
}
