import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from 'src/models/User.entity';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { Freind } from 'src/models/Freind.entity';
import { FreindRepository } from 'src/repositories/freind.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { Feed } from 'src/models/Feed.entity';
import { FeedRepository } from 'src/repositories/feed.repository';
import { MyPet } from 'src/models/MyPets.entity';
import { MyPetRepository } from 'src/repositories/myPet.repository';

@Module({
    imports: [TypeOrmModule.forFeature([User, Freind, Feed, MyPet])],
    controllers: [UserController],
    providers: [UserService, AwsService, UserRepository, FreindRepository, FeedRepository, MyPetRepository],
})
export class UserModule {}
