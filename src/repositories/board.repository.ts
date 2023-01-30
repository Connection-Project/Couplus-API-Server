import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/models/Board.entity';
import { CreateBoardTypes } from 'src/modules/board/dto/types/create.types';
import { Repository } from 'typeorm';

@Injectable()
export class BoardRepository {
    constructor(
        @InjectRepository(Board)
        private boardRepository: Repository<Board>,
    ) {}

    create(body: CreateBoardTypes): Board {
        const board: Board = this.boardRepository.create();
        board.title = body.title;
        board.type = body.type;
        board.content = body.content;
        board.user = body.user;
        return board;
    }

    async save(board: Board): Promise<void> {
        await this.boardRepository.save(board);
    }
}
