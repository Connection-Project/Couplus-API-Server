import { Request } from 'express';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateFreindReqDto } from './dto/req/create.req.dto';
import { FreindService } from './freind.service';
export declare class FreindController {
    private freindService;
    constructor(freindService: FreindService);
    create(req: Request, body: CreateFreindReqDto): Promise<ReturnResDto>;
    requestConfirm(req: Request, freindId: number): Promise<ReturnResDto>;
    getRequests(req: Request): Promise<ReturnResDto>;
    delete(req: Request, freindId: number): Promise<ReturnResDto>;
}
