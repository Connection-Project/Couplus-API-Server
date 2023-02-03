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
let BoardService = class BoardService {
    constructor(boardRepository, boardImageRepository, userRepository, awsService) {
        this.boardRepository = boardRepository;
        this.boardImageRepository = boardImageRepository;
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
            console.log(body);
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
                    createdAt: (0, date_1.formatDateParam)(row[i].createdAt),
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
            const data = {
                boardId: board.id,
                writer: board.user.nickName,
                title: board.id,
                content: board.content,
                images: images,
                createdAt: (0, date_1.formatDateParam)(board.createdAt),
            };
            return { status: 200, data: { resultCode: 1, data: data } };
        }
        catch (err) {
            console.log(err);
            return { status: 400, data: { resultCode: 1411, data: null } };
        }
    }
};
BoardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [board_repository_1.BoardRepository,
        boardImage_repository_1.BoardImageRepository,
        user_repository_1.UserRepository,
        aws_service_1.AwsService])
], BoardService);
exports.BoardService = BoardService;
//# sourceMappingURL=board.service.js.map