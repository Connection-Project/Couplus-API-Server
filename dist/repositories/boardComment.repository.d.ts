import { BoardComment } from 'src/models/BoardComment.entity';
import { Repository } from 'typeorm';
export declare class BoardCommentRepository {
    private boardCommentRepository;
    constructor(boardCommentRepository: Repository<BoardComment>);
    create(): BoardComment;
    save(boardComment: BoardComment): Promise<void>;
    findOneById(commentId: number): Promise<BoardComment>;
    findManyByBoardId(boardId: number): Promise<BoardComment[]>;
    findOneByIdAndUserId(commentId: number, userId: number): Promise<BoardComment>;
    delete(userId: number, commentId: number): Promise<void>;
}
