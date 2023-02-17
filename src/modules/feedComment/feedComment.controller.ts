import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FeedCommentService } from './feedComment.service';

@ApiTags('피드 댓글')
@Controller('feed/comment')
export class FeedCommentController {
    constructor(private feedCommentService: FeedCommentService) {}
}
