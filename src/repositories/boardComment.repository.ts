import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardComment } from 'src/models/BoardComment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardCommentRepository {
    constructor(
        @InjectRepository(BoardComment)
        private boardCommentRepository: Repository<BoardComment>,
    ) {}

    create(): BoardComment {
        return this.boardCommentRepository.create();
    }

    async save(boardComment: BoardComment): Promise<void> {
        await this.boardCommentRepository.save(boardComment);
        return;
    }

    async findManyByBoardId(
        boardId: number,
        page: number,
        limit: number,
    ): Promise<[BoardComment[], number]> {
        const query = this.boardCommentRepository
            .createQueryBuilder('bc')
            .innerJoinAndSelect('bc.board', 'b')
            .innerJoinAndSelect('bc.user', 'u')
            .where('b.id = :boardId', { boardId: boardId })
            .skip(page * limit)
            .take(limit)
            .orderBy('bc.createdAt', 'DESC');
        return query.getManyAndCount();
    }

    async findOneByIdAndUserId(commentId: number, userId: number): Promise<BoardComment> {
        return await this.boardCommentRepository
            .createQueryBuilder('bc')
            .innerJoinAndSelect('bc.user', 'u')
            .where('bc.id = :commentId', { commentId: commentId })
            .andWhere('u.id = :userId', { userId: userId })
            .getOne();
    }

    async delete(userId: number, commentId: number): Promise<void> {
        await this.boardCommentRepository
            .createQueryBuilder('bc')
            .delete()
            .where('id = :commentId', { commentId: commentId })
            .andWhere('userId = :userId', { userId: userId })
            .execute();
        return;
    }
}
