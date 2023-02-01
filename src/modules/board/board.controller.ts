import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Req,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AccessTokenGuard } from 'src/lib/jwt/guards/accessToken.guard';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { BoardService } from './board.service';
import { CreateBoardReqDto } from './dto/req/create.req.dto';
import { GetManyBoardReqDto } from './dto/req/getMany.req.dto';
import { CreateBoardFailDto } from './dto/res/create.res.dto';
import { GetManyBoardFailDto, GetManyBoardSuccessDto } from './dto/res/getMany.res.dto';
import { GetOneBoardFailDto, GetOneBoardSuccessDto } from './dto/res/getOne.res.dto';

@ApiTags('게시판(타입별)')
@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) {}

    @Post()
    @ApiCookieAuth()
    @UseInterceptors(FileInterceptor('board'))
    @UseGuards(AccessTokenGuard)
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: '게시글 등록' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '게시글 등록 성공' })
    @ApiResponse({ status: 401, type: CreateBoardFailDto, description: '게시글 등록 실패' })
    async create(@Req() req: Request, @UploadedFile() file, @Body() body: CreateBoardReqDto) {
        return this.boardService.create(req.user['userId'], file, body);
    }

    @Post('list')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '게시글 리스트' })
    @ApiResponse({ status: 200, type: GetManyBoardSuccessDto, description: '게시글 리스트 성공' })
    @ApiResponse({ status: 401, type: GetManyBoardFailDto, description: '게시글 리스트 실패' })
    async getBoards(@Req() req: Request, @Body() body: GetManyBoardReqDto) {
        return this.boardService.getBoards(req.user['userId'], body);
    }

    @Get(':boardId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '게시글 상세보기' })
    @ApiResponse({ status: 200, type: GetOneBoardSuccessDto, description: '게시글 상세보기 성공' })
    @ApiResponse({ status: 401, type: GetOneBoardFailDto, description: '게시글 상세보기 실패' })
    async getMyPet(@Req() req: Request, @Param('boardId', ParseIntPipe) boardId: number) {
        return this.boardService.getOneBoard(req.user['userId'], boardId);
    }
}
