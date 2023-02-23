import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import { ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/decorator/getUser.decorator';
import { AccessTokenGuard } from 'src/lib/jwt/guards/accessToken.guard';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateToDoReqDto } from './dto/req/create.req.dto';
import { UpdateTodoReqDto } from './dto/req/update.req.dto';
import { CreateTodoFailDto } from './dto/res/\bcreate.res.dto';
import { DeleteTodoFailDto } from './dto/res/delete.res.dto';
import { GetTodoFailDto, GetTodoSuccessDto } from './dto/res/getTodo.res.dto';
import { GetToDoListFailDto, GetToDoListSuccessDto } from './dto/res/getTodos.res.dto';
import { UpdateTodoFailDto } from './dto/res/update.res.dto';
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
    async create(@GetUser() userId: number, @Body() body: CreateToDoReqDto): Promise<ReturnResDto> {
        return await this.todoService.create(userId, body);
    }

    @Get()
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '년월 일정 리스트' })
    @ApiResponse({ status: 200, type: GetToDoListSuccessDto, description: '년월 일정 리스트 성공' })
    @ApiResponse({ status: 400, type: GetToDoListFailDto, description: '년월 일정 리스트 실패' })
    async getTodoList(
        @GetUser() userId: number,
        @Query('year') year: string,
        @Query('month') month: string,
    ): Promise<ReturnResDto> {
        return await this.todoService.getTodoList(userId, year, month);
    }

    @Get('date')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '해당 일 일정 리스트' })
    @ApiResponse({ status: 200, type: GetTodoSuccessDto, description: '해당 일 일정 리스트 성공' })
    @ApiResponse({ status: 400, type: GetTodoFailDto, description: '해당 일 일정 리스트 실패' })
    async getTodo(@GetUser() userId: number, @Query('date') date: string): Promise<ReturnResDto> {
        return await this.todoService.getTodo(userId, date);
    }

    @Patch(':todoId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '일정 수정' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '일정 수정 성공' })
    @ApiResponse({ status: 400, type: UpdateTodoFailDto, description: '일정 수정 실패' })
    async update(
        @GetUser() userId: number,
        @Param('todoId', ParseIntPipe) todoId: number,
        @Body() body: UpdateTodoReqDto,
    ): Promise<ReturnResDto> {
        return await this.todoService.update(userId, todoId, body);
    }

    @Delete(':todoId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '일정 삭제' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '일정 삭제 성공' })
    @ApiResponse({ status: 400, type: DeleteTodoFailDto, description: '일정 삭제 실패' })
    async delete(
        @GetUser() userId: number,
        @Param('todoId', ParseIntPipe) todoId: number,
    ): Promise<ReturnResDto> {
        return await this.todoService.delete(userId, todoId);
    }
}
