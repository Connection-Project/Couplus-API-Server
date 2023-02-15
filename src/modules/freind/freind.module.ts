import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friend } from 'src/models/Friend.entity';
import { User } from 'src/models/User.entity';
import { FriendRepository } from 'src/repositories/friend.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { FriendController } from './freind.controller';
import { FriendService } from './freind.service';

@Module({
    imports: [TypeOrmModule.forFeature([User, Friend])],
    providers: [FriendService, UserRepository, FriendRepository],
    controllers: [FriendController],
})
export class FriendModule {}
