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

    async save(boardComment: BoardComment): Promise<BoardComment> {
        return await this.boardCommentRepository.save(boardComment);
    }

    async findOneById(commentId): Promise<BoardComment> {
        return await this.boardCommentRepository
            .createQueryBuilder('bc')
            .where('id = :commentId', { commentId: commentId })
            .getOne();
    }

    async findManyByBoardId(boardId: number): Promise<BoardComment[]> {
        const query = this.boardCommentRepository
            .createQueryBuilder('bc')
            .innerJoinAndSelect('bc.board', 'b')
            .innerJoinAndSelect('bc.user', 'u')
            .where('b.id = :boardId', { boardId: boardId })
            .orderBy('bc.createdAt', 'DESC');
        return query.getMany();
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
