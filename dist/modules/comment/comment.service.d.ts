import { BoardRepository } from 'src/repositories/board.repository';
import { BoardCommentRepository } from 'src/repositories/boardComment.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { CreateCommentReqDto } from './dto/req/create.req.dto';
import { UpdateBoardCommentReqDto } from './dto/req/update.req.dto';
export declare class CommentService {
    private readonly boardCommentRepository;
    private readonly boardRepository;
    private readonly userRepository;
    constructor(boardCommentRepository: BoardCommentRepository, boardRepository: BoardRepository, userRepository: UserRepository);
    create(userId: number, body: CreateCommentReqDto): Promise<any>;
    getBoardComments(userId: number, boardId: number): Promise<any>;
    update(userId: number, commentId: number, body: UpdateBoardCommentReqDto): Promise<any>;
    delete(userId: number, commentId: number): Promise<any>;
}
