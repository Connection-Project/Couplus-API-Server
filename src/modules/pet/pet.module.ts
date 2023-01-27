import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { MyPet } from 'src/models/MyPets.entity';
import { User } from 'src/models/User.entity';
import { MyPetRepository } from 'src/repositories/myPet.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';

@Module({
    imports: [TypeOrmModule.forFeature([MyPet, User])],
    controllers: [PetController],
    providers: [PetService, MyPetRepository, UserRepository, AwsService],
})
export class PetModule {}
