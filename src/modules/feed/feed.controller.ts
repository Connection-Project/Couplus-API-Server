import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UploadedFiles,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/decorator/getUser.decorator';
import { JwtInterceptor } from 'src/interceptors/jwt.interceptor';
import { AccessTokenGuard } from 'src/lib/jwt/guards/accessToken.guard';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateFeedReqDto } from './dto/req/create.req.dto';
import { UpdateFeedReqDto } from './dto/req/update.req.dto';
import { CreateFeedFailDto } from './dto/res/create.res.dto';
import { DeleteFeedFailDto } from './dto/res/delete.res.dto';
import { GetFeedFailDto, GetFeedSuccessDto } from './dto/res/getFeed.res.dto';
import { GetFeedsFailDto, GetFeedsSuccessDto } from './dto/res/getFeeds.res.dto';
import { UpdateFeedFailDto } from './dto/res/update.res.dto';
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

    @Patch(':feedId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '나의 피드 수정' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '피드 수정 성공' })
    @ApiResponse({ status: 400, type: UpdateFeedFailDto, description: '피드 수정 실패' })
    async update(
        @GetUser() userId: number,
        @Param('feedId', ParseIntPipe) feedId: number,
        @Body() body: UpdateFeedReqDto,
    ): Promise<ReturnResDto> {
        return await this.feedService.update(userId, feedId, body);
    }

    @Get(':feedId')
    @ApiCookieAuth()
    @UseInterceptors(JwtInterceptor)
    @ApiOperation({ summary: '피드 상세보기' })
    @ApiResponse({ status: 200, type: GetFeedSuccessDto, description: '피드 상세보기 성공' })
    @ApiResponse({ status: 400, type: GetFeedFailDto, description: '피드 상세보기 실패' })
    async getFeed(
        @GetUser() userId: number,
        @Param('feedId', ParseIntPipe) feedId: number,
    ): Promise<ReturnResDto> {
        return await this.feedService.getFeed(userId, feedId);
    }

    @Delete(':feedId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '나의 피드 삭제하기' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '피드 삭제 성공' })
    @ApiResponse({ status: 400, type: DeleteFeedFailDto, description: '피드 삭제 실패' })
    async delete(
        @GetUser() userId: number,
        @Param('feedId', ParseIntPipe) feedId: number,
    ): Promise<ReturnResDto> {
        return await this.feedService.delete(userId, feedId);
    }
}
