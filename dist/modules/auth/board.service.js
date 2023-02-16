"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardService = void 0;
const user_repository_1 = require("../../repositories/user.repository");
const common_1 = require("@nestjs/common");
const aws_service_1 = require("../../lib/aws/src/aws.service");
const board_repository_1 = require("../../repositories/board.repository");
const boardImage_repository_1 = require("../../repositories/boardImage.repository");
const date_1 = require("../../utils/date");
const boardLiked_repository_1 = require("../../repositories/boardLiked.repository");
let BoardService = class BoardService {
    constructor(boardRepository, boardImageRepository, boardLikedRepository, userRepository, awsService) {
        this.boardRepository = boardRepository;
        this.boardImageRepository = boardImageRepository;
        this.boardLikedRepository = boardLikedRepository;
        this.userRepository = userRepository;
        this.awsService = awsService;
    }
    async create(userId, files, body) {
        try {
            const { title, type, content } = body;
            const user = await this.userRepository.findByKey('id', userId);
            const board = this.boardRepository.create();
            board.title = title;
            board.type = type;
            board.content = content;
            board.user = user;
            await this.boardRepository.save(board);
            if (files) {
                for (let i = 0; i < files.length; i++) {
                    const result = await this.awsService.uploadImage(files[i]);
                    const { Key, Location } = result;
                    const boardImage = this.boardImageRepository.create();
                    boardImage.originalName = Key;
                    boardImage.path = Location;
                    boardImage.board = board;
                    await this.boardImageRepository.save(boardImage);
                }
            }
            return { status: 200, data: { resultCode: 1, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1401, data: null } };
        }
    }
    async getBoards(userId, body) {
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
                let liked = false;
                const boardLiked = await this.boardLikedRepository.findOne(userId, row[i].id);
                const boardLikeds = await this.boardLikedRepository.getCount(row[i].id);
                if (boardLiked)
                    liked = true;
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
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1411, data: null } };
        }
    }
    async getOneBoard(userId, boardId) {
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
            const board = await this.boardRepository.findOne(query, boardWhere);
            const images = [];
            board.image.forEach((o) => {
                images.push(o.path);
            });
            const boardLiked = await this.boardLikedRepository.findOne(userId, board.id);
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
                createdAt: (0, date_1.formatDateParam)(board.createdAt),
            };
            return { status: 200, data: { resultCode: 1, data: data } };
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1411, data: null } };
        }
    }
    async update(userId, files, boardId, body) {
        try {
            const { type, title, content, deleteImages } = body;
            console.log(body);
            const board = await this.boardRepository.findOneByIdAndUserId(userId, boardId);
            if (board) {
                if (title !== '' && title !== board.title)
                    board.title = title;
                if (content !== '' && content !== board.content)
                    board.content = content;
                if (type !== '' && content !== board.type)
                    board.type = type;
                await this.boardRepository.save(board);
                if (files.length > 0) {
                    for (let i = 0; i < files.length; i++) {
                        const result = await this.awsService.uploadImage(files[i]);
                        const { Key, Location } = result;
                        const boardImage = this.boardImageRepository.create();
                        boardImage.originalName = Key;
                        boardImage.path = Location;
                        boardImage.board = board;
                        await this.boardImageRepository.save(boardImage);
                    }
                }
                if (deleteImages) {
                    deleteImages.forEach(async (o) => {
                        const boardImage = await this.boardImageRepository.getOneByPath(o);
                        await this.awsService.s3Delete({
                            Bucket: 'pet-img',
                            Key: boardImage.originalName,
                        });
                    });
                }
                return { status: 200, data: { resultCode: 1, data: null } };
            }
            else {
                return { status: 201, data: { resultCode: 1422, data: null } };
            }
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1421, data: null } };
        }
    }
    async delete(userId, boardId) {
        try {
            const board = await this.boardRepository.findOneByIdAndUserId(userId, boardId);
            if (board) {
                await this.boardRepository.delete(boardId, userId);
                return { status: 200, data: { resultCode: 1, data: null } };
            }
            else {
                return { status: 201, data: { resultCode: 1432, data: null } };
            }
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1431, data: null } };
        }
    }
    async createLiked(userId, boardId) {
        try {
            const boardLiked = await this.boardLikedRepository.findOne(userId, boardId);
            let liked = false;
            let likedCount = 0;
            if (boardLiked) {
                await this.boardLikedRepository.delete(userId, boardId);
                likedCount = await this.boardLikedRepository.getCount(boardId);
            }
            else {
                const newLiked = this.boardLikedRepository.create();
                newLiked.userId = userId;
                newLiked.boardId = boardId;
                await this.boardLikedRepository.save(newLiked);
                likedCount = await this.boardLikedRepository.getCount(boardId);
                liked = true;
            }
            return { status: 200, data: { resultCode: 1, data: { liked: liked, likedCount: likedCount } } };
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1441, data: null } };
        }
    }
};
BoardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [board_repository_1.BoardRepository,
        boardImage_repository_1.BoardImageRepository,
        boardLiked_repository_1.BoardLikedRepository,
        user_repository_1.UserRepository,
        aws_service_1.AwsService])
], BoardService);
exports.BoardService = BoardService;
//# sourceMappingURL=board.service.js.map