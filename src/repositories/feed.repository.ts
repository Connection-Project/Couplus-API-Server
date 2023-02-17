import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Feed } from 'src/models/Feed.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class FeedRepository {
    constructor(
        @InjectRepository(Feed)
        private feedRepository: Repository<Feed>,
    ) {}

    create(): Feed {
        const feed: Feed = this.feedRepository.create();
        return feed;
    }

    async save(feed: Feed): Promise<void> {
        await this.feedRepository.save(feed);
        return;
    }

    async findOneByIdAndUserId(userId: number, feedId: number): Promise<Feed> {
        return await this.feedRepository
            .createQueryBuilder('f')
            .innerJoinAndSelect('f.user', 'u')
            .where('f.id = :feedId', { feedId: feedId })
            .andWhere('u.id = :userId', { userId: userId })
            .getOne();
    }

    async delete(feedId: number, userId: number): Promise<void> {
        await this.feedRepository
            .createQueryBuilder('f')
            .delete()
            .where('id = :feedId', { feedId: feedId })
            .andWhere('userId = :userId', { userId: userId })
            .execute();
        return;
    }

    getQuery(): SelectQueryBuilder<Feed> {
        return this.feedRepository
            .createQueryBuilder('f')
            .innerJoinAndSelect('f.user', 'u')
            .leftJoinAndSelect('f.image', 'fi')
            .leftJoinAndSelect('f.comment', 'fc')
            .leftJoinAndSelect('f.hashtag', 'h');
    }

    async findOne(query: SelectQueryBuilder<Feed>, addWhere: any[]): Promise<Feed> {
        for (let i = 0; i < addWhere.length; i++) {
            query.andWhere(addWhere[i].key, addWhere[i].value);
        }
        return query.getOne();
    }

    async findMany(query: SelectQueryBuilder<Feed>, addWhere: any[]): Promise<[Feed[], number]> {
        for (let i = 0; i < addWhere.length; i++) {
            query.andWhere(addWhere[i].key, addWhere[i].value);
        }
        query.orderBy('f.createdAt', 'DESC');
        return query.getManyAndCount();
    }

    async getCount(userId: number): Promise<number> {
        return await this.feedRepository
            .createQueryBuilder('f')
            .innerJoinAndSelect('f.user', 'u')
            .andWhere('u.id = :userId', { userId: userId })
            .getCount();
    }
}
