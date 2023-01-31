import { Injectable } from '@nestjs/common';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { BoardRepository } from 'src/repositories/board.repository';
import { BoardImageRepository } from 'src/repositories/boardImage.repository';
import { CreateBoardReqDto } from './dto/req/create.req.dto';

@Injectable()
export class BoardService {
    constructor(
        private readonly boardRepository: BoardRepository,
        private readonly boardImageRepository: BoardImageRepository,
        private readonly awsService: AwsService,
    ) {}

    async create(files: File[], body: CreateBoardReqDto): Promise<any> {
        try {
            if (files) {
            }
        } catch (err) {
            console.log(err);
        }
    }
}
