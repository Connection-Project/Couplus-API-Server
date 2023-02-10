import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Freind } from 'src/models/Freind.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FreindRepository {
    constructor(
        @InjectRepository(Freind)
        private freindRepository: Repository<Freind>,
    ) {}
}
