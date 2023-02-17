import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedComment } from 'src/models/FeedComment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedCommentRepository {
    constructor(
        @InjectRepository(FeedComment)
        private feedCommentRepository: Repository<FeedComment>,
    ) {}

    create(): FeedComment {
        return this.feedCommentRepository.create();
    }

    async save(feedComment: FeedComment): Promise<void> {
        await this.feedCommentRepository.save(feedComment);
        return;
    }

    async findOneById(commentId: number): Promise<FeedComment> {
        return await this.feedCommentRepository
            .createQueryBuilder('fc')
            .where('id = :commentId', { commentId: commentId })
            .getOne();
    }

    async findManyByFeedId(feedId: number): Promise<FeedComment[]> {
        const query = this.feedCommentRepository
            .createQueryBuilder('fc')
            .innerJoinAndSelect('fc.feed', 'f')
            .innerJoinAndSelect('fc.user', 'u')
            .where('f.id = :feedId', { feedId: feedId })
            .orderBy('fc.createdAt', 'DESC');
        return query.getMany();
    }

    async findOneByIdAndUserId(commentId: number, userId: number): Promise<FeedComment> {
        return await this.feedCommentRepository
            .createQueryBuilder('fc')
            .innerJoinAndSelect('fc.user', 'u')
            .where('fc.id = :commentId', { commentId: commentId })
            .andWhere('u.id = :userId', { userId: userId })
            .getOne();
    }

    async delete(userId: number, commentId: number): Promise<void> {
        await this.feedCommentRepository
            .createQueryBuilder('fc')
            .delete()
            .where('id = :commentId', { commentId: commentId })
            .andWhere('userId = :userId', { userId: userId })
            .execute();
        return;
    }
}
