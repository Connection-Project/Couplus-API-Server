import { UserRepository } from 'src/repositories/user.repository';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { BoardRepository } from 'src/repositories/board.repository';
import { BoardImageRepository } from 'src/repositories/boardImage.repository';
import { CreateBoardReqDto } from './dto/req/create.req.dto';
import { GetManyBoardReqDto } from './dto/req/getMany.req.dto';
export declare class BoardService {
    private readonly boardRepository;
    private readonly boardImageRepository;
    private readonly userRepository;
    private readonly awsService;
    constructor(boardRepository: BoardRepository, boardImageRepository: BoardImageRepository, userRepository: UserRepository, awsService: AwsService);
    create(userId: number, files: File[], body: CreateBoardReqDto): Promise<any>;
    getBoards(userId: number, body: GetManyBoardReqDto): Promise<any>;
    getOneBoard(userId: number, boardId: number): Promise<any>;
}
