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
exports.PetController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const accessToken_guard_1 = require("../../lib/jwt/guards/accessToken.guard");
const result_res_dto_1 = require("../common/dto/res/result.res.dto");
const create_req_dto_1 = require("./dto/req/create.req.dto");
const update_req_dto_1 = require("./dto/req/update.req.dto");
const create_res_dto_1 = require("./dto/res/create.res.dto");
const delete_res_dto_1 = require("./dto/res/delete.res.dto");
const getAll_res_dto_1 = require("./dto/res/getAll.res.dto");
const update_res_dto_1 = require("./dto/res/update.res.dto");
const pet_service_1 = require("./pet.service");
let PetController = class PetController {
    constructor(petService) {
        this.petService = petService;
    }
    async create(req, file, body) {
        return this.petService.create(req.user['userId'], file, body);
    }
    async getMyPets(req) {
        return this.petService.getMyPets(req.user['userId']);
    }
    async update(myPetId, file, body) {
        return this.petService.update(myPetId, file, body);
    }
    async delete(req, myPetId) {
        return this.petService.delete(req.user['userId'], myPetId);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profile')),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: '나의 펫 등록' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '펫 등록 성공' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: create_res_dto_1.CreateMyPetFailDto, description: '펫 등록 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_req_dto_1.CreateMyPetReqDto]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '나의 펫 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: getAll_res_dto_1.GetMyPetsSuccessDto, description: '나의 펫 리스트 성공' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: getAll_res_dto_1.GetMyPetsFailDto, description: '나의 펫 리스트 실패' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "getMyPets", null);
__decorate([
    (0, common_1.Patch)(':myPetId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profile')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: '나의 펫 수정' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '펫 수정 성공' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: update_res_dto_1.NotFoundMypetDto, description: '존재하지 않는 펫' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: update_res_dto_1.UpdateMyPetFailDto, description: '펫 수정 실패' }),
    __param(0, (0, common_1.Param)('myPetId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, update_req_dto_1.UpdateMyPetReqDto]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':myPetId'),
    (0, swagger_1.ApiCookieAuth)(),
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, swagger_1.ApiOperation)({ summary: '나의 펫 삭제' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: result_res_dto_1.ResultSuccessDto, description: '펫 삭제 성공' }),
    (0, swagger_1.ApiResponse)({ status: 401, type: delete_res_dto_1.DeleteMyPetFailDto, description: '펫 삭제 실패' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('myPetId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "delete", null);
PetController = __decorate([
    (0, swagger_1.ApiTags)('나의 펫'),
    (0, common_1.Controller)('pet'),
    __metadata("design:paramtypes", [pet_service_1.PetService])
], PetController);
exports.PetController = PetController;
//# sourceMappingURL=pet.controller.js.map