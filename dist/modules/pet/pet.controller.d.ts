import { Request } from 'express';
import { CreateMyPetReqDto } from './dto/req/create.req.dto';
import { UpdateMyPetReqDto } from './dto/req/update.req.dto';
import { PetService } from './pet.service';
export declare class PetController {
    private readonly petService;
    constructor(petService: PetService);
    create(req: Request, file: any, body: CreateMyPetReqDto): Promise<any>;
    getMyPets(req: Request): Promise<any>;
    getMyPet(req: Request, myPetId: number): Promise<any>;
    update(req: Request, myPetId: number, file: any, body: UpdateMyPetReqDto): Promise<any>;
    delete(req: Request, myPetId: number): Promise<any>;
}
