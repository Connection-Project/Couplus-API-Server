import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from 'src/models/User.entity';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { UserRepository } from 'src/repositories/user.repository';
import { Feed } from 'src/models/Feed.entity';
import { FeedRepository } from 'src/repositories/feed.repository';
import { MyPet } from 'src/models/MyPets.entity';
import { MyPetRepository } from 'src/repositories/myPet.repository';
import { FriendRepository } from 'src/repositories/friend.repository';
import { Friend } from 'src/models/Friend.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Friend, Feed, MyPet])],
    controllers: [UserController],
    providers: [UserService, AwsService, UserRepository, FriendRepository, FeedRepository, MyPetRepository],
})
export class UserModule {}
