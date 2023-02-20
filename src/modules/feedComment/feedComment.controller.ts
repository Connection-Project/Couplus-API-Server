import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/decorator/getUser.decorator';
import { JwtInterceptor } from 'src/interceptors/jwt.interceptor';
import { AccessTokenGuard } from 'src/lib/jwt/guards/accessToken.guard';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { CreateFeedCommentReqDto } from './dto/req/create.req.dto';
import { UpdateFeedCommentReqDto } from './dto/req/update.req.dto';
import { CreateFeedCommentFailDto, NotFoundFeedCreateDto } from './dto/res/create.res.dto';
import { DeleteFeedCommentFailDto, NotFoundFeedDeleteDto } from './dto/res/delete.res.dto';
import { GetFeedCommentsFailDto, GetFeedCommentsSuccessDto } from './dto/res/getComments.res.dto';
import { NotFoundFeedUpdateDto, UpdateFeedCommentFailDto } from './dto/res/update.res.dto';
import { FeedCommentService } from './feedComment.service';

@ApiTags('피드 댓글')
@Controller('feed/comment')
export class FeedCommentController {
    constructor(private feedCommentService: FeedCommentService) {}

    @Post()
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '피드 댓글 등록' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '피드 댓글 등록 성공' })
    @ApiResponse({ status: 201, type: NotFoundFeedCreateDto, description: '존재하지 않는 피드' })
    @ApiResponse({ status: 400, type: CreateFeedCommentFailDto, description: '피드 댓글 등록 실패' })
    async create(@GetUser() userId: number, @Body() body: CreateFeedCommentReqDto) {
        return await this.feedCommentService.create(userId, body);
    }

    @Get(':feedId')
    @ApiCookieAuth()
    @UseInterceptors(JwtInterceptor)
    @ApiOperation({ summary: '피드 댓글 리스트' })
    @ApiResponse({ status: 200, type: GetFeedCommentsSuccessDto, description: '피드 댓글 리스트 성공' })
    @ApiResponse({ status: 400, type: GetFeedCommentsFailDto, description: '피드 댓글 리스트 실패' })
    async getFeedComments(@GetUser() userId: number, @Param('feedId', ParseIntPipe) feedId: number) {
        return await this.feedCommentService.getFeedComments(userId, feedId);
    }

    @Patch(':commentId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '피드 댓글 수정' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '피드 댓글 수정 성공' })
    @ApiResponse({ status: 201, type: NotFoundFeedUpdateDto, description: '존재하지 않는 피드' })
    @ApiResponse({ status: 400, type: UpdateFeedCommentFailDto, description: '피드 댓글 수정 실패' })
    async update(
        @GetUser() userId: number,
        @Param('commentId', ParseIntPipe) commentId: number,
        @Body() body: UpdateFeedCommentReqDto,
    ) {
        return await this.feedCommentService.update(userId, commentId, body);
    }

    @Delete(':commentId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '피드 댓글 삭제' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '피드 댓글 삭제 성공' })
    @ApiResponse({ status: 201, type: NotFoundFeedDeleteDto, description: '존재하지 않는 피드' })
    @ApiResponse({ status: 401, type: DeleteFeedCommentFailDto, description: '피드 댓글 삭제 실패' })
    async delete(@GetUser() userId: number, @Param('commentId', ParseIntPipe) commentId: number) {
        return await this.feedCommentService.delete(userId, commentId);
    }
}
