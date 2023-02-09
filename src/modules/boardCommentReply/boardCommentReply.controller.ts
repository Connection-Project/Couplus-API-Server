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
import { ApiCookieAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { AccessTokenGuard } from 'src/lib/jwt/guards/accessToken.guard';
import { UpdateBoardCommentFailDto } from '../boardComment/dto/res/update.res.dto';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { BoardcommentreplyService } from './boardCommentReply.service';
import { CreateBoardCommentReplyReqDto } from './dto/req/create.req.dto';
import { UpdateBoardCommentReplyDto } from './dto/req/update.req.dto';
import { CreateBoardCommentReplyFailDto, NotFoundReplyCreateDto } from './dto/res/create.res.dto';
import { DeleteBoardCommentReplyFailDto, NotFoundReplyDeleteDto } from './dto/res/delete.res.dto';
import { GetBoardCommentReplysFailDto, GetBoardCommentsSuccessDto } from './dto/res/getReplys.res.dto';
import { NotFoundReplyUpdateDto } from './dto/res/update.res.dto';

@Controller('board/comment/reply')
export class BoardcommentreplyController {
    constructor(private readonly boardCommentReplyService: BoardcommentreplyService) {}

    @Post()
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '게시글 댓글 등록' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '게시글 댓글 등록 성공' })
    @ApiResponse({ status: 201, type: NotFoundReplyCreateDto, description: '존재하지 않는 댓글' })
    @ApiResponse({
        status: 400,
        type: CreateBoardCommentReplyFailDto,
        description: '게시글 대댓글 등록 실패',
    })
    async create(@Req() req: Request, @Body() body: CreateBoardCommentReplyReqDto) {
        return await this.boardCommentReplyService.create(req.user['userId'], body);
    }

    // TODO : 차후 비로그인도 볼 수 있게 변경 (interceptor 적용)
    @Get(':commentId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '대댓글 리스트' })
    @ApiResponse({ status: 200, type: GetBoardCommentsSuccessDto, description: '대댓글 리스트 성공' })
    @ApiResponse({ status: 400, type: GetBoardCommentReplysFailDto, description: '대댓글 리스트 실패' })
    async getBoardComments(@Req() req: Request, @Param('commentId', ParseIntPipe) commentId: number) {
        return await this.boardCommentReplyService.getBoardCommentReplys(req.user['userId'], commentId);
    }

    @Patch(':replyId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '대댓글 수정' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '대댓글 수정 성공' })
    @ApiResponse({ status: 201, type: NotFoundReplyUpdateDto, description: '존재하지 않는 댓글' })
    @ApiResponse({ status: 400, type: UpdateBoardCommentFailDto, description: '대댓글 수정 실패' })
    async update(
        @Req() req: Request,
        @Param('replyId', ParseIntPipe) replyId: number,
        @Body() body: UpdateBoardCommentReplyDto,
    ) {
        return await this.boardCommentReplyService.update(req.user['userId'], replyId, body);
    }

    @Delete(':replyId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '대댓글 삭제' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '대댓글 삭제 성공' })
    @ApiResponse({ status: 201, type: NotFoundReplyDeleteDto, description: '존재하지 않는 댓글' })
    @ApiResponse({ status: 401, type: DeleteBoardCommentReplyFailDto, description: '대댓글 삭제 실패' })
    async delete(@Req() req: Request, @Param('replyId', ParseIntPipe) replyId: number) {
        return await this.boardCommentReplyService.delete(req.user['userId'], replyId);
    }
}
