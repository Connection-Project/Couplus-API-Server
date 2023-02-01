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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const accessToken_guard_1 = require("../../lib/jwt/guards/accessToken.guard");
const result_res_dto_1 = require("../common/dto/res/result.res.dto");
const board_service_1 = require("./board.service");
const create_req_dto_1 = require("./dto/req/create.req.dto");
const getMany_req_dto_1 = require("./dto/req/getMany.req.dto");
const create_res_dto_1 = require("./dto/res/create.res.dto");
const getMany_res_dto_1 = require("./dto/res/getMany.res.dto");
const getOne_res_dto_1 = require("./dto/res/getOne.res.dto");
let BoardController = class BoardController {
    constructor(boardService) {
        this.boardService = boardService;
    }
    async create(req, file, body) {
        return this.boardService.create(req.user['userId'], file, body);
    }
    async getBoards(req, body) {
        return this.boardService.getBoards(req.user['userId'], body);
    }
    async getMyPet(req, boardId) {
        return this.boardService.getOneBoard(req.user['userId'], boardId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('board')),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: '게시글 등록' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '게시글 등록 성공' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: create_res_dto_1.CreateBoardFailDto, description: '게시글 등록 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_req_dto_1.CreateBoardReqDto]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('list'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '게시글 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getMany_res_dto_1.GetManyBoardSuccessDto, description: '게시글 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: getMany_res_dto_1.GetManyBoardFailDto, description: '게시글 리스트 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, getMany_req_dto_1.GetManyBoardReqDto]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getBoards", null);
__decorate([
    (0, common_1.Get)(':boardId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '게시글 상세보기' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getOne_res_dto_1.GetOneBoardSuccessDto, description: '게시글 상세보기 성공' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: getOne_res_dto_1.GetOneBoardFailDto, description: '게시글 상세보기 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('boardId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getMyPet", null);
BoardController = __decorate([
    (0, swagger_1.ApiTags)('게시판(타입별)'),
    (0, common_1.Controller)('board'),
    __metadata("design:paramtypes", [board_service_1.BoardService])
], BoardController);
exports.BoardController = BoardController;
//# sourceMappingURL=board.controller.js.map