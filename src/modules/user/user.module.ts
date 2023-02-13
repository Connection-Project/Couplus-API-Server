import { UserRepository } from './../../repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from 'src/models/User.entity';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { Freind } from 'src/models/Freind.entity';
import { FreindRepository } from 'src/repositories/freind.repository';

@Module({
    imports: [TypeOrmModule.forFeature([User, Freind])],
    controllers: [UserController],
    providers: [UserService, AwsService, UserRepository, FreindRepository],
})
export class UserModule {}
