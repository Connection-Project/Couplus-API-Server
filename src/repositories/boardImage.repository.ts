import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardImage } from 'src/models/BoardImage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardImageRepository {
    constructor(
        @InjectRepository(BoardImage)
        private boardImageRepository: Repository<BoardImage>,
    ) {}

    create(): BoardImage {
        const boardImage: BoardImage = this.boardImageRepository.create();
        return boardImage;
    }

    async save(boardImage: BoardImage): Promise<void> {
        await this.boardImageRepository.save(boardImage);
    }
}
