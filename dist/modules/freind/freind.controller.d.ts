import { Request } from 'express';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreatefriendReqDto } from './dto/req/create.req.dto';
import { FriendService } from './freind.service';
export declare class FriendController {
    private friendService;
    constructor(friendService: FriendService);
    create(req: Request, body: CreatefriendReqDto): Promise<ReturnResDto>;
    requestConfirm(userId: number, friendId: number): Promise<ReturnResDto>;
    getRequests(req: Request): Promise<ReturnResDto>;
    delete(req: Request, friendId: number): Promise<ReturnResDto>;
}
