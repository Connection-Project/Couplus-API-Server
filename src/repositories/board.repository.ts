import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/models/Board.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';

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
        return;
    }

    getQuery(): SelectQueryBuilder<Board> {
        return this.boardRepository
            .createQueryBuilder('b')
            .innerJoinAndSelect('b.user', 'u')
            .leftJoinAndSelect('b.image', 'bi')
            .leftJoinAndSelect('b.comment', 'bc')
            .leftJoinAndSelect('bc.reply', 'bcr');
    }

    async findMany(
        query: SelectQueryBuilder<Board>,
        addWhere: any[],
        limit: number,
    ): Promise<[Board[], number]> {
        for (let i = 0; i < addWhere.length; i++) {
            query.andWhere(addWhere[i].key, addWhere[i].value);
        }
        query.skip(0);
        query.take(limit);
        query.orderBy('b.createdAt', 'DESC');
        return query.getManyAndCount();
    }

    async findOne(query: SelectQueryBuilder<Board>, addWhere: any[]): Promise<Board> {
        for (let i = 0; i < addWhere.length; i++) {
            query.andWhere(addWhere[i].key, addWhere[i].value);
        }
        return query.getOne();
    }

    async delete(boardId: number, userId: number): Promise<void> {
        await this.boardRepository
            .createQueryBuilder('b')
            .delete()
            .where('id = :boardId', { boardId: boardId })
            .andWhere('userId = :userId', { userId: userId })
            .execute();
        return;
    }

    async findOneByIdAndUserId(userId: number, boardId: number): Promise<Board> {
        return await this.boardRepository
            .createQueryBuilder('b')
            .innerJoinAndSelect('b.user', 'u')
            .where('b.id = :boardId', { boardId: boardId })
            .andWhere('u.id = :userId', { userId: userId })
            .getOne();
    }
}
