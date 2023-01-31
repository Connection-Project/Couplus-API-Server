import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { Board } from 'src/models/Board.entity';
import { BoardImage } from 'src/models/BoardImage.entity';
import { BoardRepository } from 'src/repositories/board.repository';
import { BoardImageRepository } from 'src/repositories/boardImage.repository';
import { AwsService } from 'src/lib/aws/src/aws.service';

@Module({
    imports: [TypeOrmModule.forFeature([Board, BoardImage])],
    providers: [BoardService, BoardRepository, BoardImageRepository, AwsService],
    controllers: [BoardController],
})
export class BoardModule {}
