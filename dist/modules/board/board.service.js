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
const common_1 = require("@nestjs/common");
const aws_service_1 = require("../../lib/aws/src/aws.service");
const board_repository_1 = require("../../repositories/board.repository");
const boardImage_repository_1 = require("../../repositories/boardImage.repository");
let BoardService = class BoardService {
    constructor(boardRepository, boardImageRepository, awsService) {
        this.boardRepository = boardRepository;
        this.boardImageRepository = boardImageRepository;
        this.awsService = awsService;
    }
    async create(files, body) {
        try {
            if (files) {
            }
        }
        catch (err) {
            console.log(err);
        }
    }
};
BoardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [board_repository_1.BoardRepository,
        boardImage_repository_1.BoardImageRepository,
        aws_service_1.AwsService])
], BoardService);
exports.BoardService = BoardService;
//# sourceMappingURL=board.service.js.map