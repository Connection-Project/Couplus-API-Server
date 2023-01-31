import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/models/Board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardRepository {
    constructor(
        @InjectRepository(Board)
        private boardRepository: Repository<Board>,
    ) {}

    create(): Board {
        const board: Board = this.boardRepository.create();
        return board;
    }

    async save(board: Board): Promise<void> {
        await this.boardRepository.save(board);
    }
}
