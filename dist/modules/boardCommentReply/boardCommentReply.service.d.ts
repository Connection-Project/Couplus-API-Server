import { BoardCommentRepository } from 'src/repositories/boardComment.repository';
import { BoardCommentReplyRepository } from 'src/repositories/boardCommentReply.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { CreateBoardCommentReplyReqDto } from './dto/req/create.req.dto';
import { UpdateBoardCommentReplyDto } from './dto/req/update.req.dto';
export declare class BoardcommentreplyService {
    private readonly boardCommentRepository;
    private readonly boardCommentReplyRepository;
    private readonly userRepository;
    constructor(boardCommentRepository: BoardCommentRepository, boardCommentReplyRepository: BoardCommentReplyRepository, userRepository: UserRepository);
    create(userId: number, body: CreateBoardCommentReplyReqDto): Promise<any>;
    getBoardCommentReplys(userId: number, commentId: number): Promise<any>;
    update(userId: number, replyId: number, body: UpdateBoardCommentReplyDto): Promise<any>;
    delete(userId: number, replyId: number): Promise<any>;
}
