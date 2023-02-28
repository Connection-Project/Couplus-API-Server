import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardCommentReply } from 'src/models/BoardCommentReply.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardCommentReplyRepository {
    constructor(
        @InjectRepository(BoardCommentReply)
        private boardCommentReplyRepository: Repository<BoardCommentReply>,
    ) {}

    create(): BoardCommentReply {
        return this.boardCommentReplyRepository.create();
    }

    async save(boardCommentReply: BoardCommentReply): Promise<void> {
        await this.boardCommentReplyRepository.save(boardCommentReply);
        return;
    }

    async findManyByCommentId(commentId: number): Promise<BoardCommentReply[]> {
        const query = this.boardCommentReplyRepository
            .createQueryBuilder('bcr')
            .innerJoinAndSelect('bcr.comment', 'bc')
            .innerJoinAndSelect('bcr.user', 'u')
            .where('bc.id = :commentId', { commentId: commentId })
            .orderBy('bc.createdAt', 'DESC');
        return query.getMany();
    }

    async findOneByIdAndUserId(replyId: number, userId: number): Promise<BoardCommentReply> {
        return await this.boardCommentReplyRepository
            .createQueryBuilder('bcr')
            .innerJoinAndSelect('bcr.user', 'u')
            .where('bcr.id = :replyId', { replyId: replyId })
            .andWhere('u.id = :userId', { userId: userId })
            .getOne();
    }

    async delete(userId: number, replyId: number): Promise<void> {
        await this.boardCommentReplyRepository
            .createQueryBuilder('bcr')
            .delete()
            .where('id = :replyId', { replyId: replyId })
            .andWhere('userId = :userId', { userId: userId })
            .execute();
        return;
    }
}
