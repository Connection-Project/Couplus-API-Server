import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friend } from 'src/models/Friend.entity';
import { MyPet } from 'src/models/MyPets.entity';
import { User } from 'src/models/User.entity';
import { FriendRepository } from 'src/repositories/friend.repository';
import { MyPetRepository } from 'src/repositories/myPet.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { FriendController } from './freind.controller';
import { FriendService } from './freind.service';

@Module({
    imports: [TypeOrmModule.forFeature([User, Friend, MyPet])],
    providers: [FriendService, UserRepository, FriendRepository, MyPetRepository],
    controllers: [FriendController],
})
export class FriendModule {}
