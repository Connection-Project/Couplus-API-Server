import { AwsService } from 'src/lib/aws/src/aws.service';
import { BoardRepository } from 'src/repositories/board.repository';
import { BoardImageRepository } from 'src/repositories/boardImage.repository';
import { CreateBoardReqDto } from './dto/req/create.req.dto';
export declare class BoardService {
    private readonly boardRepository;
    private readonly boardImageRepository;
    private readonly awsService;
    constructor(boardRepository: BoardRepository, boardImageRepository: BoardImageRepository, awsService: AwsService);
    create(files: File[], body: CreateBoardReqDto): Promise<any>;
}
