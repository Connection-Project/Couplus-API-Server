import { Friend } from 'src/models/Freind.entity';
import { Repository } from 'typeorm';
export declare class FriendRepository {
    private friendRepository;
    constructor(friendRepository: Repository<Friend>);
    create(): Friend;
    save(friend: Friend): Promise<Friend>;
    findOneByUserIdAndfriendId(userId: number, friendId: number): Promise<Friend>;
    findManyByStatus(userId: number, status: string): Promise<Friend[]>;
    delete(userId: number, friendId: number): Promise<void>;
    getDeleteAllByUserId(userId: number): Promise<void>;
    getDeleteAllByfriendId(friendId: number): Promise<void>;
    getCount(userId: number): Promise<number>;
}
