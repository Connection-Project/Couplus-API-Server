import { Request } from 'express';
import { CreateMyPetReqDto } from './dto/req/create.req.dto';
import { UpdateMyPetReqDto } from './dto/req/update.req.dto';
import { PetService } from './pet.service';
export declare class PetController {
    private readonly petService;
    constructor(petService: PetService);
    create(req: Request, files: File[], body: CreateMyPetReqDto): Promise<any>;
    update(myPetId: number, files: File[], body: UpdateMyPetReqDto): Promise<any>;
}
