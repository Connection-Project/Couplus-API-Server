import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AccessTokenGuard } from 'src/lib/jwt/guards/accessToken.guard';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { CommentService } from './comment.service';
import { CreateCommentReqDto } from './dto/req/create.req.dto';
import { CreateBoardCommentFailDto, NotFoundBoardDto } from './dto/res/create.res.dto';
import { GetBoardCommentsFailDto, GetBoardCommentsSuccessDto } from './dto/res/getComments.res.dto';

@ApiTags('게시글 댓글')
@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService) {}

    @Post()
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '게시글 댓글 등록' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '게시글 댓글 등록 성공' })
    @ApiResponse({ status: 201, type: NotFoundBoardDto, description: '존재하지 않는 게시글' })
    @ApiResponse({ status: 401, type: CreateBoardCommentFailDto, description: '게시글 댓글 등록 실패' })
    async create(@Req() req: Request, @Body() body: CreateCommentReqDto) {
        return await this.commentService.create(req.user['userId'], body);
    }

    // TODO : 차후 비로그인도 볼 수 있게 변경 (interceptor 적용)
    @Get(':boardId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '댓글 리스트' })
    @ApiResponse({ status: 200, type: GetBoardCommentsSuccessDto, description: '댓글 리스트 성공' })
    @ApiResponse({ status: 401, type: GetBoardCommentsFailDto, description: '댓글 리스트 실패' })
    async getBoardComments(@Req() req: Request, @Param('boardId', ParseIntPipe) boardId: number) {
        return await this.commentService.getBoardComments(req.user['userId'], boardId);
    }
}
