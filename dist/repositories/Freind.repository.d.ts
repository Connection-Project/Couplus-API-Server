import { Freind } from 'src/models/Freind.entity';
import { Repository } from 'typeorm';
export declare class FreindRepository {
    private freindRepository;
    constructor(freindRepository: Repository<Freind>);
}
