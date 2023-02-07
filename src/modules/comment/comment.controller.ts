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
import { UpdateBoardReqDto } from '../board/dto/req/update.req.dto';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { CommentService } from './comment.service';
import { CreateCommentReqDto } from './dto/req/create.req.dto';
import { CreateBoardCommentFailDto, NotFoundBoardCreateDto } from './dto/res/create.res.dto';
import { DeleteBoardCommentFailDto, NotFoundBoardDeleteDto } from './dto/res/delete.res.dto';
import { GetBoardCommentsFailDto, GetBoardCommentsSuccessDto } from './dto/res/getComments.res.dto';
import { NotFoundBoardUpdateDto, UpdateBoardCommentFailDto } from './dto/res/update.res.dto';

@ApiTags('게시글 댓글')
@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService) {}

    @Post()
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '게시글 댓글 등록' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '게시글 댓글 등록 성공' })
    @ApiResponse({ status: 201, type: NotFoundBoardCreateDto, description: '존재하지 않는 게시글' })
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

    @Patch(':commentId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '댓글 수정' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '게시글 댓글 수정 성공' })
    @ApiResponse({ status: 201, type: NotFoundBoardUpdateDto, description: '존재하지 않는 게시글' })
    @ApiResponse({ status: 401, type: UpdateBoardCommentFailDto, description: '게시글 댓글 수정 실패' })
    async update(
        @Req() req: Request,
        @Param('commentId', ParseIntPipe) commentId: number,
        @Body() body: UpdateBoardReqDto,
    ) {
        return await this.commentService.update(req.user['userId'], commentId, body);
    }

    @Delete(':commentId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '댓글 삭제' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '게시글 댓글 삭제 성공' })
    @ApiResponse({ status: 201, type: NotFoundBoardDeleteDto, description: '존재하지 않는 게시글' })
    @ApiResponse({ status: 401, type: DeleteBoardCommentFailDto, description: '게시글 댓글 수정 실패' })
    async delete(@Req() req: Request, @Param('commentId', ParseIntPipe) commentId: number) {
        return await this.commentService.delete(req.user['userId'], commentId);
    }
}
