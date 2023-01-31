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
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AccessTokenGuard } from 'src/lib/jwt/guards/accessToken.guard';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { CreateMyPetReqDto } from './dto/req/create.req.dto';
import { UpdateMyPetReqDto } from './dto/req/update.req.dto';
import { CreateMyPetFailDto } from './dto/res/create.res.dto';
import { DeleteMyPetFailDto } from './dto/res/delete.res.dto';
import { GetMyPetsFailDto, GetMyPetsSuccessDto } from './dto/res/getAll.res.dto';
import { GetOneMyPetFailDto, GetOneMyPetSuccessDto } from './dto/res/getOne.res.dto';
import { NotFoundMypetDto, UpdateMyPetFailDto } from './dto/res/update.res.dto';
import { PetService } from './pet.service';

@ApiTags('나의 펫')
@Controller('pet')
export class PetController {
    constructor(private readonly petService: PetService) {}

    @Post()
    @ApiCookieAuth()
    @UseInterceptors(FileInterceptor('profile'))
    @UseGuards(AccessTokenGuard)
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: '나의 펫 등록' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '펫 등록 성공' })
    @ApiResponse({ status: 401, type: CreateMyPetFailDto, description: '펫 등록 실패' })
    async create(@Req() req: Request, @UploadedFile() file, @Body() body: CreateMyPetReqDto) {
        return this.petService.create(req.user['userId'], file, body);
    }

    @Get()
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '나의 펫 리스트' })
    @ApiResponse({ status: 200, type: GetMyPetsSuccessDto, description: '나의 펫 리스트 성공' })
    @ApiResponse({ status: 401, type: GetMyPetsFailDto, description: '나의 펫 리스트 실패' })
    async getMyPets(@Req() req: Request) {
        return this.petService.getMyPets(req.user['userId']);
    }

    @Get(':myPetId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '나의 펫 상세정보' })
    @ApiResponse({ status: 200, type: GetOneMyPetSuccessDto, description: '나의 펫 상세정보 성공' })
    @ApiResponse({ status: 401, type: GetOneMyPetFailDto, description: '나의 펫 상세정보 실패' })
    async getMyPet(@Req() req: Request, @Param('myPetId', ParseIntPipe) myPetId: number) {
        return this.petService.getMyPet(req.user['userId'], myPetId);
    }

    @Patch(':myPetId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @UseInterceptors(FileInterceptor('profile'))
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: '나의 펫 수정' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '펫 수정 성공' })
    @ApiResponse({ status: 200, type: NotFoundMypetDto, description: '존재하지 않는 펫' })
    @ApiResponse({ status: 401, type: UpdateMyPetFailDto, description: '펫 수정 실패' })
    async update(
        @Req() req: Request,
        @Param('myPetId', ParseIntPipe) myPetId: number,
        @UploadedFile() file,
        @Body() body: UpdateMyPetReqDto,
    ) {
        return this.petService.update(req.user['userId'], myPetId, file, body);
    }

    @Delete(':myPetId')
    @ApiCookieAuth()
    @UseGuards(AccessTokenGuard)
    @ApiOperation({ summary: '나의 펫 삭제' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '펫 삭제 성공' })
    @ApiResponse({ status: 401, type: DeleteMyPetFailDto, description: '펫 삭제 실패' })
    async delete(@Req() req: Request, @Param('myPetId', ParseIntPipe) myPetId: number) {
        return this.petService.delete(req.user['userId'], myPetId);
    }
}
