import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardLiked } from 'src/models/BoardLiked.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardLikedRepository {
    constructor(
        @InjectRepository(BoardLiked)
        private boardLikedRepository: Repository<BoardLiked>,
    ) {}

    create(): BoardLiked {
        const boardLiked: BoardLiked = this.boardLikedRepository.create();
        return boardLiked;
    }

    async save(boardImage: BoardLiked): Promise<void> {
        await this.boardLikedRepository.save(boardImage);
        return;
    }

    async findOne(userId: number, boardId: number): Promise<BoardLiked> {
        return await this.boardLikedRepository
            .createQueryBuilder('bl')
            .innerJoinAndSelect('bl.user', 'u')
            .innerJoinAndSelect('bl.board', 'b')
            .where('u.id = :userId', { userId: userId })
            .andWhere('b.id = :boardId', { boardId: boardId })
            .getOne();
    }

    async findMany(userId: number, boardId: number): Promise<BoardLiked[]> {
        return await this.boardLikedRepository
            .createQueryBuilder('bl')
            .innerJoinAndSelect('bl.user', 'u')
            .innerJoinAndSelect('bl.board', 'b')
            .where('u.id = :userId', { userId: userId })
            .andWhere('b.id = :boardId', { boardId: boardId })
            .getMany();
    }

    async delete(userId: number, boardId: number): Promise<void> {
        await this.boardLikedRepository
            .createQueryBuilder('bl')
            .delete()
            .where('userId = :userId', { userId: userId })
            .andWhere('boardId = :boardId', { boardId: boardId })
            .execute();
        return;
    }

    async getCount(boardId: number): Promise<number> {
        return await this.boardLikedRepository
            .createQueryBuilder('bl')
            .innerJoinAndSelect('bl.board', 'b')
            .andWhere('b.id = :boardId', { boardId: boardId })
            .getCount();
    }
}
