import { Module } from '@nestjs/common';
import { FeedCommentService } from './feedComment.service';
import { FeedCommentController } from './feedComment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feed } from 'src/models/Feed.entity';
import { FeedComment } from 'src/models/FeedComment.entity';
import { User } from 'src/models/User.entity';
import { FeedRepository } from 'src/repositories/feed.repository';
import { FeedCommentRepository } from 'src/repositories/feedComment.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { MyPetRepository } from 'src/repositories/myPet.repository';
import { MyPet } from 'src/models/MyPets.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Feed, FeedComment, User, MyPet])],
    providers: [FeedCommentService, FeedRepository, FeedCommentRepository, UserRepository, MyPetRepository],
    controllers: [FeedCommentController],
})
export class FeedCommentModule {}
