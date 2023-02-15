import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Friend, FriendStatus } from 'src/models/Friend.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FriendRepository {
    constructor(
        @InjectRepository(Friend)
        private friendRepository: Repository<Friend>,
    ) {}

    create(): Friend {
        return this.friendRepository.create();
    }

    async save(friend: Friend): Promise<Friend> {
        return await this.friendRepository.save(friend);
    }

    // ! userId와 friendId를 헷갈리지 않게 파라미터를 넣어줘야함
    async findOneByUserIdAndfriendId(userId: number, friendId: number): Promise<Friend> {
        return await this.friendRepository
            .createQueryBuilder('f')
            .where('userId = :userId', { userId: friendId })
            .andWhere('friendId = :friendId', { friendId: userId })
            .getOne();
    }

    async findManyByStatus(userId: number, status: string): Promise<Friend[]> {
        return await this.friendRepository
            .createQueryBuilder('f')
            .where('status = :status', { status: status })
            .andWhere('friendId = :friendId', { friendId: userId })
            .getMany();
    }

    async delete(userId: number, friendId: number): Promise<void> {
        await this.friendRepository
            .createQueryBuilder('f')
            .delete()
            .where('userId = :userId', { userId: userId })
            .andWhere('friendId = :friendId', { friendId: friendId })
            .execute();
        return;
    }

    async getDeleteAllByUserId(userId: number): Promise<void> {
        await this.friendRepository
            .createQueryBuilder('f')
            .delete()
            .where('userId = :userId', { userId: userId })
            .execute();
        return;
    }

    async getDeleteAllByfriendId(friendId: number): Promise<void> {
        await this.friendRepository
            .createQueryBuilder('f')
            .delete()
            .where('friendId = :friendId', { friendId: friendId })
            .execute();
        return;
    }

    async getCount(userId: number): Promise<number> {
        return await this.friendRepository
            .createQueryBuilder('f')
            .where('status = :status', { status: FriendStatus.confirmed })
            .andWhere('userId = :userId', { userId: userId })
            .getCount();
    }
}
