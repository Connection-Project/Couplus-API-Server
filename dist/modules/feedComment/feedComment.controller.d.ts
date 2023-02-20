import { CreateFeedCommentReqDto } from './dto/req/create.req.dto';
import { UpdateFeedCommentReqDto } from './dto/req/update.req.dto';
import { FeedCommentService } from './feedComment.service';
export declare class FeedCommentController {
    private feedCommentService;
    constructor(feedCommentService: FeedCommentService);
    create(userId: number, body: CreateFeedCommentReqDto): Promise<import("../common/dto/return/return.res.dto").ReturnResDto>;
    getFeedComments(userId: number, feedId: number): Promise<import("../common/dto/return/return.res.dto").ReturnResDto>;
    update(userId: number, commentId: number, body: UpdateFeedCommentReqDto): Promise<import("../common/dto/return/return.res.dto").ReturnResDto>;
    delete(userId: number, commentId: number): Promise<import("../common/dto/return/return.res.dto").ReturnResDto>;
}
