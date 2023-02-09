import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedImage } from 'src/models/FeedImage.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FeedImageRepository {
    constructor(
        @InjectRepository(FeedImage)
        private feedImageRepository: Repository<FeedImage>,
    ) {}

    create(): FeedImage {
        const feedImage: FeedImage = this.feedImageRepository.create();
        return feedImage;
    }

    async save(feedImage: FeedImage): Promise<void> {
        await this.feedImageRepository.save(feedImage);
        return;
    }

    async getOneByPath(path: string): Promise<FeedImage> {
        return await this.feedImageRepository
            .createQueryBuilder('fi')
            .where('path = :path', { path: path })
            .getOne();
    }
}
