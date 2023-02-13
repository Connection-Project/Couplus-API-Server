import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Freind } from 'src/models/Freind.entity';
import { Brackets, Repository } from 'typeorm';

@Injectable()
export class FreindRepository {
    constructor(
        @InjectRepository(Freind)
        private freindRepository: Repository<Freind>,
    ) {}

    create(): Freind {
        return this.freindRepository.create();
    }

    async save(freind: Freind): Promise<Freind> {
        return await this.freindRepository.save(freind);
    }

    // ! userId와 freindId를 헷갈리지 않게 파라미터를 넣어줘야함
    async findOneByUserIdAndFreindId(userId: number, freindId: number): Promise<Freind> {
        return await this.freindRepository
            .createQueryBuilder('f')
            .where('userId = :userId', { userId: freindId })
            .andWhere('freindId = :freindId', { freindId: userId })
            .getOne();
    }

    async findManyByStatus(userId: number, status: string): Promise<Freind[]> {
        return await this.freindRepository
            .createQueryBuilder('f')
            .where('status = :status', { status: status })
            .getMany();
    }
}
