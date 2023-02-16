import { UserRepository } from 'src/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { Board } from 'src/models/Board.entity';
import { BoardRepository } from 'src/repositories/board.repository';
import { BoardImageRepository } from 'src/repositories/boardImage.repository';
import { CreateBoardReqDto } from '../board/dto/req/create.req.dto';
import { User } from 'src/models/User.entity';
import { BoardImage } from 'src/models/BoardImage.entity';
import { GetManyBoardReqDto } from '../board/dto/req/getMany.req.dto';
import { formatDateParam } from 'src/utils/date';
import { UpdateBoardReqDto } from '../board/dto/req/update.req.dto';
import { BoardLiked } from 'src/models/BoardLiked.entity';
import { BoardLikedRepository } from 'src/repositories/boardLiked.repository';

@Injectable()
export class BoardService {
    constructor(
        private readonly boardRepository: BoardRepository,
        private readonly boardImageRepository: BoardImageRepository,
        private readonly boardLikedRepository: BoardLikedRepository,
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
                    await this.boardImageRepository.save(boardImage);
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
                    key: 'b.type = :type',
                    value: {
                        type: type,
                    },
                },
            ];
            const [row, cnt] = await this.boardRepository.findMany(query, boardWhere, limit);
            const items = [];
            for (let i = 0; i < row.length; i++) {
                // ! 게시글의 좋아요를 판별(내 좋아요 유무)
                let liked = false;
                const boardLiked: BoardLiked = await this.boardLikedRepository.findOne(userId, row[i].id);
                const boardLikeds = await this.boardLikedRepository.getCount(row[i].id);

                // ! 해당 게시글에 좋아요를 눌렀다면 true
                if (boardLiked) liked = true;
                items[i] = {
                    boardId: row[i].id,
                    writer: row[i].user.nickName,
                    image: row[i].image.length > 0 ? row[i].image[0].path : null,
                    title: row[i].title,
                    content: row[i].content,
                    liked: liked,
                    likedCount: boardLikeds,
                    commentCount: row[i].comment.length,
                    createdAt: row[i].createdAt.toISOString().substring(0, 10),
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
            const boardLiked: BoardLiked = await this.boardLikedRepository.findOne(userId, board.id);
            const boardLikeds = await this.boardLikedRepository.getCount(board.id);
            const data = {
                boardId: board.id,
                writer: board.user.nickName,
                type: board.type,
                title: board.title,
                content: board.content,
                images: images,
                liked: boardLiked ? true : false,
                likedCount: boardLikeds,
                commentCount: board.comment.length,
                mine: board.user.id === userId ? true : false,
                createdAt: formatDateParam(board.createdAt),
            };
            return { status: 200, data: { resultCode: 1, data: data } };
        } catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1411, data: null } };
        }
    }

    async update(userId: number, files: File[], boardId: number, body: UpdateBoardReqDto): Promise<any> {
        try {
            const { type, title, content, deleteImages } = body;
            console.log(body);
            const board: Board = await this.boardRepository.findOneByIdAndUserId(userId, boardId);
            if (board) {
                if (title !== '' && title !== board.title) board.title = title;
                if (content !== '' && content !== board.content) board.content = content;
                if (type !== '' && content !== board.type) board.type = type;
                await this.boardRepository.save(board);

                // ! 이미지 파일이 전송 될 경우 등록
                if (files.length > 0) {
                    for (let i = 0; i < files.length; i++) {
                        const result = await this.awsService.uploadImage(files[i]);
                        const { Key, Location } = result;
                        const boardImage: BoardImage = this.boardImageRepository.create();
                        boardImage.originalName = Key;
                        boardImage.path = Location;
                        boardImage.board = board;
                        await this.boardImageRepository.save(boardImage);
                    }
                }

                // ! 삭제 할 이미지가 존재 할 경우
                if (deleteImages) {
                    deleteImages.forEach(async (o) => {
                        const boardImage: BoardImage = await this.boardImageRepository.getOneByPath(o);
                        await this.awsService.s3Delete({
                            Bucket: 'pet-img',
                            Key: boardImage.originalName,
                        });
                    });
                }

                return { status: 200, data: { resultCode: 1, data: null } };
            } else {
                return { status: 201, data: { resultCode: 1422, data: null } };
            }
        } catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1421, data: null } };
        }
    }

    async delete(userId: number, boardId: number): Promise<any> {
        try {
            const board: Board = await this.boardRepository.findOneByIdAndUserId(userId, boardId);
            if (board) {
                await this.boardRepository.delete(boardId, userId);
                return { status: 200, data: { resultCode: 1, data: null } };
            } else {
                // ! 접근 권한 없음
                return { status: 201, data: { resultCode: 1432, data: null } };
            }
        } catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1431, data: null } };
        }
    }

    async createLiked(userId: number, boardId: number): Promise<any> {
        try {
            const boardLiked: BoardLiked = await this.boardLikedRepository.findOne(userId, boardId);
            let liked = false;
            let likedCount = 0;
            if (boardLiked) {
                await this.boardLikedRepository.delete(userId, boardId);
                likedCount = await this.boardLikedRepository.getCount(boardId);
            } else {
                const newLiked: BoardLiked = this.boardLikedRepository.create();
                newLiked.userId = userId;
                newLiked.boardId = boardId;
                await this.boardLikedRepository.save(newLiked);
                likedCount = await this.boardLikedRepository.getCount(boardId);
                liked = true;
            }
            return { status: 200, data: { resultCode: 1, data: { liked: liked, likedCount: likedCount } } };
        } catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1441, data: null } };
        }
    }
}
