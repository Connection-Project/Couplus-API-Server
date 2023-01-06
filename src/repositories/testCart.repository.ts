import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestCart } from 'src/models/TestCart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestCartRepository {
    constructor(
        @InjectRepository(TestCart)
        private testCartRepository: Repository<TestCart>,
    ) {}
}
