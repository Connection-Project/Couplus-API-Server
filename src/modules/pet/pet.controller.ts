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
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { fileUpload } from 'src/interceptors/file-upload.interceptor';
import { ResultSuccessDto } from '../common/dto/res/result.res.dto';
import { CreateMyPetReqDto } from './dto/req/create.req.dto';
import { UpdateMyPetReqDto } from './dto/req/update.req.dto';
import { CreateMyPetFailDto } from './dto/res/create.res.dto';
import { DeleteMyPetFailDto } from './dto/res/delete.res.dto';
import { GetMyPetsFailDto, GetMyPetsSuccessDto } from './dto/res/getAll.res.dto';
import { NotFoundMypetDto, UpdateMyPetFailDto } from './dto/res/update.res.dto';
import { PetService } from './pet.service';

@ApiTags('나의 펫')
@Controller('pet')
export class PetController {
    constructor(private readonly petService: PetService) {}
    @Post()
    @UseInterceptors(FileInterceptor('profile', fileUpload))
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: '나의 펫 등록' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '펫 등록 성공' })
    @ApiResponse({ status: 401, type: CreateMyPetFailDto, description: '펫 등록 실패' })
    async create(@Req() req: Request, @UploadedFiles() files: File[], @Body() body: CreateMyPetReqDto) {
        return this.petService.create(req.user['userId'], files, body);
    }

    @Get()
    @ApiOperation({ summary: '나의 펫 리스트' })
    @ApiResponse({ status: 200, type: GetMyPetsSuccessDto, description: '나의 펫 리스트 성공' })
    @ApiResponse({ status: 401, type: GetMyPetsFailDto, description: '나의 펫 리스트 실패' })
    async getMyPets(@Req() req: Request) {
        return this.petService.getMyPets(req.user['userId']);
    }

    @Patch(':myPetId')
    @UseInterceptors(FileInterceptor('profile', fileUpload))
    @ApiConsumes('multipart/form-data')
    @ApiOperation({ summary: '나의 펫 수정' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '펫 수정 성공' })
    @ApiResponse({ status: 200, type: NotFoundMypetDto, description: '존재하지 않는 펫' })
    @ApiResponse({ status: 401, type: UpdateMyPetFailDto, description: '펫 수정 실패' })
    async update(
        @Param('myPetId', ParseIntPipe) myPetId: number,
        @UploadedFiles() files: File[],
        @Body() body: UpdateMyPetReqDto,
    ) {
        return this.petService.update(myPetId, files, body);
    }

    @Delete(':myPetId')
    @ApiOperation({ summary: '나의 펫 삭제' })
    @ApiResponse({ status: 200, type: ResultSuccessDto, description: '펫 삭제 성공' })
    @ApiResponse({ status: 401, type: DeleteMyPetFailDto, description: '펫 삭제 실패' })
    async delete(@Req() req: Request, @Param('myPetId', ParseIntPipe) myPetId: number) {
        return this.petService.delete(req.user['userId'], myPetId);
    }
}
