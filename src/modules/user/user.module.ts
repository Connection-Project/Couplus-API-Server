import { UserRepository } from './../../repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from 'src/models/User.entity';
import { AwsService } from 'src/lib/aws/src/aws.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService, AwsService, UserRepository],
})
export class UserModule {}
