import { Request } from 'express';
import { BoardService } from './board.service';
import { CreateBoardReqDto } from './dto/req/create.req.dto';
import { GetManyBoardReqDto } from './dto/req/getMany.req.dto';
import { UpdateBoardReqDto } from './dto/req/update.req.dto';
export declare class BoardController {
    private readonly boardService;
    constructor(boardService: BoardService);
    create(req: Request, files: File[], body: CreateBoardReqDto): Promise<any>;
    getBoards(userId: number, body: GetManyBoardReqDto): Promise<any>;
    getMyPet(userId: number, boardId: number): Promise<any>;
    update(req: Request, files: File[], boardId: number, body: UpdateBoardReqDto): Promise<any>;
    delete(userId: number, boardId: number): Promise<any>;
    createLiked(req: Request, boardId: number): Promise<any>;
}
