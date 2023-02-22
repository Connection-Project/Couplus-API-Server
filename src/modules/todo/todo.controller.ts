import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/decorator/getUser.decorator';
import { AccessTokenGuard } from 'src/lib/jwt/guards/accessToken.guard';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { CreateToDoReqDto } from './dto/req/create.req.dto';
import { CreateTodoFailDto } from './dto/res/\bcreate.res.dto';
import { GetToDoListFailDto, GetToDoListSuccessDto } from './dto/res/getTodos.res.dto';
import { TodoService } from './todo.service';

@ApiTags('일정 관리')
@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Post()
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '일정 등록' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '일정 등록 성공' })
    @ApiResponse({ status: 400, type: CreateTodoFailDto, description: '일정 등록 실패' })
    async create(@GetUser() userId: number, @Body() body: CreateToDoReqDto) {
        return await this.todoService.create(userId, body);
    }

    @Get()
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '일정 리스트' })
    @ApiResponse({ status: 200, type: GetToDoListSuccessDto, description: '일정 리스트 성공' })
    @ApiResponse({ status: 400, type: GetToDoListFailDto, description: '일정 리스트 실패' })
    async getTodoList(
        @GetUser() userId: number,
        @Query('year') year: string,
        @Query('month') month: string,
    ) {
        return await this.todoService.getTodoList(userId, year, month);
    }
}
