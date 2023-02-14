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
exports.FreindController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const accessToken_guard_1 = require("../../lib/jwt/guards/accessToken.guard");
const result_res_dto_1 = require("../common/dto/res/result.res.dto");
const create_req_dto_1 = require("./dto/req/create.req.dto");
const create_res_dto_1 = require("./dto/res/create.res.dto");
const delete_res_dto_1 = require("./dto/res/delete.res.dto");
const getConfirm_res_dto_1 = require("./dto/res/getConfirm.res.dto");
const getRequests_res_dto_1 = require("./dto/res/getRequests.res.dto");
const freind_service_1 = require("./freind.service");
let FreindController = class FreindController {
    constructor(freindService) {
        this.freindService = freindService;
    }
    async create(req, body) {
        return await this.freindService.create(req.user['userId'], body);
    }
    async requestConfirm(req, freindId) {
        return await this.freindService.requestConfirm(req.user['userId'], freindId);
    }
    async getRequests(req) {
        return await this.freindService.getRequests(req.user['userId']);
    }
    async delete(req, freindId) {
        return await this.freindService.delete(req.user['userId'], freindId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '친구 요청' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '친구 요청 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: create_res_dto_1.CreateFreindFailDto, description: '친구 요청 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_req_dto_1.CreateFreindReqDto]),
    __metadata("design:returntype", Promise)
], FreindController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('confirmed/:freindId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '친구 요청 수락' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '친구 요청 수락 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getConfirm_res_dto_1.ConfirmRequestFreindFailDto, description: '친구 요청 수락 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('freindId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], FreindController.prototype, "requestConfirm", null);
__decorate([
    (0, common_1.Get)('request'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '친구 요청 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getRequests_res_dto_1.GetRequestFreindSuccessDto, description: '친구 요청 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: getRequests_res_dto_1.GetRequestFreindFailDto, description: '친구 요청 리스트 실패' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FreindController.prototype, "getRequests", null);
__decorate([
    (0, common_1.Delete)(':freindId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '친구 삭제' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '친구 삭제 성공' }),
    (0, swagger_1.ApiResponse)({ status: 400, type: delete_res_dto_1.DeleteFreindFailDto, description: '친구 삭제 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('freindId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], FreindController.prototype, "delete", null);
FreindController = __decorate([
    (0, swagger_1.ApiTags)('친구 관리'),
    (0, common_1.Controller)('freind'),
    __metadata("design:paramtypes", [freind_service_1.FreindService])
], FreindController);
exports.FreindController = FreindController;
//# sourceMappingURL=freind.controller.js.map