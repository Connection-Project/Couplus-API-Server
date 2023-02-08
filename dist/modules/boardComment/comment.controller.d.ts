import { Request } from 'express';
import { UpdateBoardReqDto } from '../board/dto/req/update.req.dto';
import { CommentService } from './comment.service';
import { CreateCommentReqDto } from './dto/req/create.req.dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    create(req: Request, body: CreateCommentReqDto): Promise<any>;
    getBoardComments(req: Request, boardId: number): Promise<any>;
    update(req: Request, commentId: number, body: UpdateBoardReqDto): Promise<any>;
    delete(req: Request, commentId: number): Promise<any>;
}
