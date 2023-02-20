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
    UploadedFiles,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AccessTokenGuard } from 'src/lib/jwt/guards/accessToken.guard';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { BoardService } from './board.service';
import { CreateBoardReqDto } from './dto/req/create.req.dto';
import { GetManyBoardReqDto } from './dto/req/getMany.req.dto';
import { UpdateBoardReqDto } from './dto/req/update.req.dto';
import { CreateBoardFailDto } from './dto/res/create.res.dto';
import { CreateBoardLikedFailDto, CreateBoardLikedSuccessDto } from './dto/res/createLiked.res.dto';
import { DeleteBoardFailDto, UnauthorizedDeleteBoard } from './dto/res/delete.res.dto';
import { GetManyBoardFailDto, GetManyBoardSuccessDto } from './dto/res/getMany.res.dto';
import { GetOneBoardFailDto, GetOneBoardSuccessDto } from './dto/res/getOne.res.dto';
import { UnauthorizedUpdateBoard, UpdateBoardFailDto } from './dto/res/update.res.dto';

@ApiTags('게시판(타입별)')
@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Post()
    @ApiCookieAuth()
    @UseInterceptors(FilesInterceptor('board'))
    @UseGuards(AccessTokenGuard)
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: '게시글 등록' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '게시글 등록 성공' })
    @ApiResponse({ status: 400, type: CreateBoardFailDto, description: '게시글 등록 실패' })
    async create(@Req() req: Request, @UploadedFiles() files: File[], @Body() body: CreateBoardReqDto) {
        console.log(files);
        return await this.boardService.create(req.user['userId'], files, body);
    }

    @Post('list')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '게시글 리스트' })
    @ApiResponse({ status: 200, type: GetManyBoardSuccessDto, description: '게시글 리스트 성공' })
    @ApiResponse({ status: 400, type: GetManyBoardFailDto, description: '게시글 리스트 실패' })
    async getBoards(@Req() req: Request, @Body() body: GetManyBoardReqDto) {
        return await this.boardService.getBoards(req.user['userId'], body);
    }

    @Get(':boardId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '게시글 상세보기' })
    @ApiResponse({ status: 200, type: GetOneBoardSuccessDto, description: '게시글 상세보기 성공' })
    @ApiResponse({ status: 400, type: GetOneBoardFailDto, description: '게시글 상세보기 실패' })
    async getMyPet(@Req() req: Request, @Param('boardId', ParseIntPipe) boardId: number) {
        return await this.boardService.getOneBoard(req.user['userId'], boardId);
    }

    @Patch(':boardId')
    @ApiCookieAuth()
    @UseInterceptors(FilesInterceptor('board'))
    @UseGuards(AccessTokenGuard)
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: '게시글 수정하기(본인 만)' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '게시글 수정하기 성공' })
    @ApiResponse({ status: 201, type: UnauthorizedUpdateBoard, description: '수정 권한 없음' })
    @ApiResponse({ status: 400, type: UpdateBoardFailDto, description: '게시글 수정하기 실패' })
    async update(
        @Req() req: Request,
        @UploadedFiles() files: File[],
        @Param('boardId', ParseIntPipe) boardId: number,
        @Body() body: UpdateBoardReqDto,
    ) {
        return await this.boardService.update(req.user['userId'], files, boardId, body);
    }

    @Delete(':boardId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '게시글 삭제하기(본인 만)' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '게시글 삭제하기 성공' })
    @ApiResponse({ status: 201, type: UnauthorizedDeleteBoard, description: '삭제 권한 없음' })
    @ApiResponse({ status: 400, type: DeleteBoardFailDto, description: '게시글 삭제하기 실패' })
    async delete(@Req() req: Request, @Param('boardId', ParseIntPipe) boardId: number) {
        return await this.boardService.delete(req.user['userId'], boardId);
    }

    @Get(':boardId/like')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '좋아요 / 좋아요 취소' })
    @ApiResponse({ status: 200, type: CreateBoardLikedSuccessDto, description: '게시글 좋아요/취소 성공' })
    @ApiResponse({ status: 400, type: CreateBoardLikedFailDto, description: '게시글 좋아요/취소 실패' })
    async createLiked(@Req() req: Request, @Param('boardId', ParseIntPipe) boardId: number) {
        return await this.boardService.createLiked(req.user['userId'], boardId);
    }
}
