import { UserRepository } from 'src/repositories/user.repository';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { BoardRepository } from 'src/repositories/board.repository';
import { BoardImageRepository } from 'src/repositories/boardImage.repository';
import { CreateBoardReqDto } from '../board/dto/req/create.req.dto';
import { GetManyBoardReqDto } from '../board/dto/req/getMany.req.dto';
import { UpdateBoardReqDto } from '../board/dto/req/update.req.dto';
import { BoardLikedRepository } from 'src/repositories/boardLiked.repository';
export declare class BoardService {
    private readonly boardRepository;
    private readonly boardImageRepository;
    private readonly boardLikedRepository;
    private readonly userRepository;
    private readonly awsService;
    constructor(boardRepository: BoardRepository, boardImageRepository: BoardImageRepository, boardLikedRepository: BoardLikedRepository, userRepository: UserRepository, awsService: AwsService);
    create(userId: number, files: File[], body: CreateBoardReqDto): Promise<any>;
    getBoards(userId: number, body: GetManyBoardReqDto): Promise<any>;
    getOneBoard(userId: number, boardId: number): Promise<any>;
    update(userId: number, files: File[], boardId: number, body: UpdateBoardReqDto): Promise<any>;
    delete(userId: number, boardId: number): Promise<any>;
    createLiked(userId: number, boardId: number): Promise<any>;
}
