import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PetModule } from './pet/pet.module';
import { BoardModule } from './board/board.module';
import { CommentModule } from './boardComment/boardComment.module';
import { BoardCommentReplyModule } from './boardCommentReply/boardCommentReply.module';

@Module({
    imports: [
        UserModule,
        AuthModule,
        PetModule,
        BoardModule,
        CommentModule,
        BoardCommentReplyModule,
        // ProductModule,
        // CartModule
    ],
})
export class IndexModule {}
