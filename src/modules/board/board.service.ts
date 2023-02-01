import { UserRepository } from 'src/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { Board } from 'src/models/Board.entity';
import { BoardRepository } from 'src/repositories/board.repository';
import { BoardImageRepository } from 'src/repositories/boardImage.repository';
import { CreateBoardReqDto } from './dto/req/create.req.dto';
import { User } from 'src/models/User.entity';
import { BoardImage } from 'src/models/BoardImage.entity';
import { GetManyBoardReqDto } from './dto/req/getMany.req.dto';
import { formatDateParam } from 'src/utils/date';

@Injectable()
export class BoardService {
    constructor(
        private readonly boardRepository: BoardRepository,
        private readonly boardImageRepository: BoardImageRepository,
        private readonly userRepository: UserRepository,
        private readonly awsService: AwsService,
    ) {}

    async create(userId: number, files: File[], body: CreateBoardReqDto): Promise<any> {
        try {
            const { title, type, content } = body;
            const user: User = await this.userRepository.findByKey('id', userId);
            const board: Board = this.boardRepository.create();
            board.title = title;
            board.type = type;
            board.content = content;
            board.user = user;
            await this.boardRepository.save(board);
            if (files) {
                for (let i = 0; i < files.length; i++) {
                    const result = await this.awsService.uploadImage(files[i]);
                    const { Key, Location } = result;
                    const boardImage: BoardImage = this.boardImageRepository.create();
                    boardImage.originalName = Key;
                    boardImage.path = Location;
                    boardImage.board = board;
                }
            }
            return { status: 200, data: { resultCode: 1, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1401, data: null } };
        }
    }

    async getBoards(userId: number, body: GetManyBoardReqDto): Promise<any> {
        try {
            const { type, limit } = body;
            const query = this.boardRepository.getQuery();
            const boardWhere = [
                {
                    key: 'u.id = :userId',
                    value: {
                        userId: userId,
                    },
                },
                {
                    key: 'b.type = :type',
                    value: {
                        type: type,
                    },
                },
            ];
            const [row, cnt] = await this.boardRepository.findMany(query, boardWhere, limit);
            const items = [];
            for (let i = 0; i < row.length; i++) {
                items[i] = {
                    boardId: row[i].id,
                    writer: row[i].user.nickName,
                    image: row[i].image[0].path,
                    title: row[i].title,
                    content: row[i].content,
                    createdAt: formatDateParam(row[i].createdAt),
                };
            }
            return { status: 200, data: { resultCode: 1, data: { items: items, count: cnt } } };
        } catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1411, data: null } };
        }
    }

    async getOneBoard(userId: number, boardId: number): Promise<any> {
        try {
            const query = this.boardRepository.getQuery();
            const boardWhere = [
                {
                    key: 'b.id = :boardId',
                    value: {
                        boardId: boardId,
                    },
                },
                {
                    key: 'u.id = :userId',
                    value: {
                        userId: userId,
                    },
                },
            ];
            const board: Board = await this.boardRepository.findOne(query, boardWhere);
            const images = [];
            board.image.forEach((o) => {
                images.push(o.path);
            });
            const data = {
                boardId: board.id,
                writer: board.user.nickName,
                title: board.id,
                content: board.content,
                images: images,
                createdAt: formatDateParam(board.createdAt),
            };
            return { status: 200, data: { resultCode: 1, data: data } };
        } catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1411, data: null } };
        }
    }
}
