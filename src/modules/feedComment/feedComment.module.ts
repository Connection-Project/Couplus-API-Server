import { Module } from '@nestjs/common';
import { FeedCommentService } from './feedComment.service';
import { FeedCommentController } from './feedComment.controller';

@Module({
    providers: [FeedCommentService],
    controllers: [FeedCommentController],
})
export class FeedCommentModule {}
