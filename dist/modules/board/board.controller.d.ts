import { Request } from 'express';
import { BoardService } from './board.service';
import { CreateBoardReqDto } from './dto/req/create.req.dto';
import { GetManyBoardReqDto } from './dto/req/getMany.req.dto';
export declare class BoardController {
    private readonly boardService;
    constructor(boardService: BoardService);
    create(req: Request, file: any, body: CreateBoardReqDto): Promise<any>;
    getBoards(req: Request, body: GetManyBoardReqDto): Promise<any>;
    getMyPet(req: Request, boardId: number): Promise<any>;
}
