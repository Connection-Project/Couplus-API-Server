import { FeedComment } from 'src/models/FeedComment.entity';
import { Repository } from 'typeorm';
export declare class FeedCommentRepository {
    private feedCommentRepository;
    constructor(feedCommentRepository: Repository<FeedComment>);
    create(): FeedComment;
    save(feedComment: FeedComment): Promise<void>;
    findOneById(commentId: number): Promise<FeedComment>;
    findManyByFeedId(feedId: number): Promise<FeedComment[]>;
    findOneByIdAndUserId(commentId: number, userId: number): Promise<FeedComment>;
    delete(userId: number, commentId: number): Promise<void>;
}
