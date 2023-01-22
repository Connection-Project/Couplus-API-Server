import {
    Body,
    Controller,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Req,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { fileUpload } from 'src/interceptors/file-upload.interceptor';
import { CreateMyPetReqDto } from './dto/req/create.req.dto';
import { UpdateMyPetReqDto } from './dto/req/update.req.dto';
import { PetService } from './pet.service';

@ApiTags('나의 펫')
@Controller('pet')
export class PetController {
    constructor(private readonly petService: PetService) {}
    @Post()
    @UseInterceptors(FileInterceptor('profile', fileUpload))
    @ApiConsumes('multipart/form-data')
    async create(@Req() req: Request, @UploadedFiles() files: File[], @Body() body: CreateMyPetReqDto) {
        return this.petService.create(req.user['userId'], files, body);
    }

    @Patch(':myPetId')
    @UseInterceptors(FileInterceptor('profile', fileUpload))
    @ApiConsumes('multipart/form-data')
    async update(
        @Param('myPetId', ParseIntPipe) myPetId: number,
        @UploadedFiles() files: File[],
        @Body() body: UpdateMyPetReqDto,
    ) {
        return this.petService.update(myPetId, files, body);
    }
}
