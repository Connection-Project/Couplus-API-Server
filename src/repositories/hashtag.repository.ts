import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HashTag } from 'src/models/HashTag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HashTagRepository {
    constructor(
        @InjectRepository(HashTag)
        private hashtagRepository: Repository<HashTag>,
    ) {}

    create(): HashTag {
        const hashtag: HashTag = this.hashtagRepository.create();
        return hashtag;
    }

    async save(hashtag: HashTag): Promise<void> {
        await this.hashtagRepository.save(hashtag);
        return;
    }

    async findManyByFeedId(feedId: number): Promise<HashTag[]> {
        return await this.hashtagRepository
            .createQueryBuilder('h')
            .innerJoinAndSelect('h.feed', 'f')
            .where('f.id = :feedId', { feedId: feedId })
            .getMany();
    }

    async delete(hashtagId: number): Promise<void> {
        await this.hashtagRepository
            .createQueryBuilder('h')
            .delete()
            .where('id = :hashtagId', { hashtagId: hashtagId })
            .execute();
        return;
    }
}
