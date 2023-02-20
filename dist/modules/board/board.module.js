"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const board_service_1 = require("./board.service");
const board_controller_1 = require("./board.controller");
const Board_entity_1 = require("../../models/Board.entity");
const BoardImage_entity_1 = require("../../models/BoardImage.entity");
const board_repository_1 = require("../../repositories/board.repository");
const boardImage_repository_1 = require("../../repositories/boardImage.repository");
const aws_service_1 = require("../../lib/aws/src/aws.service");
const user_repository_1 = require("../../repositories/user.repository");
const User_entity_1 = require("../../models/User.entity");
const BoardLiked_entity_1 = require("../../models/BoardLiked.entity");
const boardLiked_repository_1 = require("../../repositories/boardLiked.repository");
let BoardModule = class BoardModule {
};
BoardModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Board_entity_1.Board, BoardImage_entity_1.BoardImage, BoardLiked_entity_1.BoardLiked, User_entity_1.User])],
        providers: [
            board_service_1.BoardService,
            board_repository_1.BoardRepository,
            boardImage_repository_1.BoardImageRepository,
            boardLiked_repository_1.BoardLikedRepository,
            aws_service_1.AwsService,
            user_repository_1.UserRepository,
        ],
        controllers: [board_controller_1.BoardController],
    })
], BoardModule);
exports.BoardModule = BoardModule;
//# sourceMappingURL=board.module.js.map