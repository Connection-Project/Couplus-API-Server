import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedLiked } from 'src/models/FeedLiked.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedLikedRepository {
    constructor(
        @InjectRepository(FeedLiked)
        private feedLikedRepository: Repository<FeedLiked>,
    ) {}

    create(): FeedLiked {
        const feedLiked: FeedLiked = this.feedLikedRepository.create();
        return feedLiked;
    }

    async save(boardImage: FeedLiked): Promise<void> {
        await this.feedLikedRepository.save(boardImage);
        return;
    }

    async findOne(userId: number, feedId: number): Promise<FeedLiked> {
        return await this.feedLikedRepository
            .createQueryBuilder('fl')
            .innerJoinAndSelect('fl.user', 'u')
            .innerJoinAndSelect('fl.feed', 'f')
            .where('u.id = :userId', { userId: userId })
            .andWhere('f.id = :feedId', { feedId: feedId })
            .getOne();
    }

    async findMany(userId: number, boardId: number): Promise<FeedLiked[]> {
        return await this.feedLikedRepository
            .createQueryBuilder('bl')
            .innerJoinAndSelect('bl.user', 'u')
            .innerJoinAndSelect('bl.board', 'b')
            .where('u.id = :userId', { userId: userId })
            .andWhere('b.id = :boardId', { boardId: boardId })
            .getMany();
    }

    async delete(userId: number, feedId: number): Promise<void> {
        await this.feedLikedRepository
            .createQueryBuilder('fl')
            .delete()
            .where('userId = :userId', { userId: userId })
            .andWhere('feedId = :feedId', { feedId: feedId })
            .execute();
        return;
    }

    async getCount(feedId: number): Promise<number> {
        return await this.feedLikedRepository
            .createQueryBuilder('fl')
            .innerJoinAndSelect('fl.feed', 'f')
            .andWhere('f.id = :feedId', { feedId: feedId })
            .getCount();
    }
}
