import { Module } from '@nestjs/common';
import { FreindService } from './freind.service';
import { FreindController } from './freind.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/User.entity';
import { Freind } from 'src/models/Freind.entity';
import { UserRepository } from 'src/repositories/user.repository';
import { FreindRepository } from 'src/repositories/freind.repository';

@Module({
    imports: [TypeOrmModule.forFeature([User, Freind])],
    providers: [FreindService, UserRepository, FreindRepository],
    controllers: [FreindController],
})
export class FreindModule {}
