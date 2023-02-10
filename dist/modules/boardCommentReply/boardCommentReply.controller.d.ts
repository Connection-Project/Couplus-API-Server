import { Request } from 'express';
import { BoardcommentreplyService } from './boardCommentReply.service';
import { CreateBoardCommentReplyReqDto } from './dto/req/create.req.dto';
import { UpdateBoardCommentReplyDto } from './dto/req/update.req.dto';
export declare class BoardcommentreplyController {
    private readonly boardCommentReplyService;
    constructor(boardCommentReplyService: BoardcommentreplyService);
    create(req: Request, body: CreateBoardCommentReplyReqDto): Promise<any>;
    update(req: Request, replyId: number, body: UpdateBoardCommentReplyDto): Promise<any>;
    delete(req: Request, replyId: number): Promise<any>;
}
