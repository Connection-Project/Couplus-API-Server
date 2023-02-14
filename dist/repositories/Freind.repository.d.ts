import { Freind } from 'src/models/Freind.entity';
import { Repository } from 'typeorm';
export declare class FreindRepository {
    private freindRepository;
    constructor(freindRepository: Repository<Freind>);
    create(): Freind;
    save(freind: Freind): Promise<Freind>;
    findOneByUserIdAndFreindId(userId: number, freindId: number): Promise<Freind>;
    findManyByStatus(userId: number, status: string): Promise<Freind[]>;
    delete(userId: number, freindId: number): Promise<void>;
    getDeleteAllByUserId(userId: number): Promise<void>;
    getDeleteAllByFreindId(freindId: number): Promise<void>;
}
