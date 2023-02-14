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
import { AccessTokenGuard } from 'src/lib/jwt/guards/accessToken.guard';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateFreindReqDto } from './dto/req/create.req.dto';
import { CreateFreindFailDto } from './dto/res/create.res.dto';
import { DeleteFreindFailDto } from './dto/res/delete.res.dto';
import { ConfirmRequestFreindFailDto } from './dto/res/getConfirm.res.dto';
import { GetRequestFreindFailDto, GetRequestFreindSuccessDto } from './dto/res/getRequests.res.dto';
import { FreindService } from './freind.service';

@ApiTags('친구 관리')
@Controller('freind')
export class FreindController {
    constructor(private freindService: FreindService) {}

    @Post()
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '친구 요청' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '친구 요청 성공' })
    @ApiResponse({ status: 400, type: CreateFreindFailDto, description: '친구 요청 실패' })
    async create(@Req() req: Request, @Body() body: CreateFreindReqDto): Promise<ReturnResDto> {
        return await this.freindService.create(req.user['userId'], body);
    }

    @Patch('confirmed/:freindId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '친구 요청 수락' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '친구 요청 수락 성공' })
    @ApiResponse({ status: 400, type: ConfirmRequestFreindFailDto, description: '친구 요청 수락 실패' })
    async requestConfirm(
        @Req() req: Request,
        @Param('freindId', ParseIntPipe) freindId: number,
    ): Promise<ReturnResDto> {
        return await this.freindService.requestConfirm(req.user['userId'], freindId);
    }

    @Get('request')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '친구 요청 리스트' })
    @ApiResponse({ status: 200, type: GetRequestFreindSuccessDto, description: '친구 요청 리스트 성공' })
    @ApiResponse({ status: 400, type: GetRequestFreindFailDto, description: '친구 요청 리스트 실패' })
    async getRequests(@Req() req: Request): Promise<ReturnResDto> {
        return await this.freindService.getRequests(req.user['userId']);
    }

    @Delete(':freindId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '친구 삭제' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '친구 삭제 성공' })
    @ApiResponse({ status: 400, type: DeleteFreindFailDto, description: '친구 삭제 실패' })
    async delete(
        @Req() req: Request,
        @Param('freindId', ParseIntPipe) freindId: number,
    ): Promise<ReturnResDto> {
        return await this.freindService.delete(req.user['userId'], freindId);
    }
}
