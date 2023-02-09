import { Module } from '@nestjs/common';
import { BoardcommentreplyService } from './boardCommentReply.service';
import { BoardcommentreplyController } from './boardCommentReply.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardComment } from 'src/models/BoardComment.entity';
import { BoardCommentReply } from 'src/models/BoardCommentReply.entity';
import { User } from 'src/models/User.entity';
import { BoardCommentRepository } from 'src/repositories/boardComment.repository';
import { BoardCommentReplyRepository } from 'src/repositories/boardCommentReply.repository';
import { UserRepository } from 'src/repositories/user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([BoardComment, BoardCommentReply, User])],
    providers: [
        BoardcommentreplyService,
        BoardCommentRepository,
        BoardCommentReplyRepository,
        UserRepository,
    ],
    controllers: [BoardcommentreplyController],
})
export class BoardCommentReplyModule {}
