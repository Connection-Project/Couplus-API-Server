import { BoardCommentReply } from 'src/models/BoardCommentReply.entity';
import { Repository } from 'typeorm';
export declare class BoardCommentReplyRepository {
    private boardCommentReplyRepository;
    constructor(boardCommentReplyRepository: Repository<BoardCommentReply>);
    create(): BoardCommentReply;
    save(boardCommentReply: BoardCommentReply): Promise<void>;
    findManyByBoardId(boardId: number): Promise<BoardCommentReply[]>;
    findOneByIdAndUserId(replyId: number, userId: number): Promise<BoardCommentReply>;
    delete(userId: number, replyId: number): Promise<void>;
}
