import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UploadedFiles,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/decorator/getUser.decorator';
import { AccessTokenGuard } from 'src/lib/jwt/guards/accessToken.guard';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateFeedReqDto } from './dto/req/create.req.dto';
import { CreateFeedFailDto } from './dto/res/create.res.dto';
import { GetFeedsFailDto, GetFeedsSuccessDto } from './dto/res/getFeeds.res.dto';
import { FeedService } from './feed.service';

@ApiTags('피드 관리')
@Controller('feed')
export class FeedController {
    constructor(private feedService: FeedService) {}

    @Post()
    @ApiCookieAuth()
    @UseInterceptors(FilesInterceptor('feed'))
    @UseGuards(AccessTokenGuard)
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: '피드 등록' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '피드 등록 성공' })
    @ApiResponse({ status: 400, type: CreateFeedFailDto, description: '피드 등록 실패' })
    async create(
        @GetUser() userId: number,
        @UploadedFiles() files: File[],
        @Body() body: CreateFeedReqDto,
    ): Promise<ReturnResDto> {
        return await this.feedService.create(userId, files, body);
    }

    @Get('list/:limit')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '나의 피드 리스트' })
    @ApiResponse({ status: 200, type: GetFeedsSuccessDto, description: '나의 피드 리스트 성공' })
    @ApiResponse({ status: 400, type: GetFeedsFailDto, description: '나의 피드 리스트 실패' })
    async getMyFeeds(
        @GetUser() userId: number,
        @Param('limit', ParseIntPipe) limit: number,
    ): Promise<ReturnResDto> {
        return await this.feedService.getMyFeeds(userId, limit);
    }

    // ? 파람을 두개 넘길 수 있나??
    @Get('friend/:userId/:limit')
    @ApiOperation({ summary: '친구 피드 리스트' })
    @ApiResponse({ status: 200, type: GetFeedsSuccessDto, description: '친구 피드 리스트 성공' })
    @ApiResponse({ status: 400, type: GetFeedsFailDto, description: '친구 피드 리스트 실패' })
    async getfriendFeeds(
        @Param('userId', ParseIntPipe) userId: number,
        @Param('limit', ParseIntPipe) limit: number,
    ): Promise<ReturnResDto> {
        return await this.feedService.getfriendFeeds(userId, limit);
    }
}
