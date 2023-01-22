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
const file_upload_interceptor_1 = require("../../interceptors/file-upload.interceptor");
const create_req_dto_1 = require("./dto/req/create.req.dto");
const update_req_dto_1 = require("./dto/req/update.req.dto");
const pet_service_1 = require("./pet.service");
let PetController = class PetController {
    constructor(petService) {
        this.petService = petService;
    }
    async create(req, files, body) {
        return this.petService.create(req.user['userId'], files, body);
    }
    async update(myPetId, files, body) {
        return this.petService.update(myPetId, files, body);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profile', file_upload_interceptor_1.fileUpload)),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array, create_req_dto_1.CreateMyPetReqDto]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':myPetId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('profile', file_upload_interceptor_1.fileUpload)),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    __param(0, (0, common_1.Param)('myPetId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array, update_req_dto_1.UpdateMyPetReqDto]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "update", null);
PetController = __decorate([
    (0, swagger_1.ApiTags)('나의 펫'),
    (0, common_1.Controller)('pet'),
    __metadata("design:paramtypes", [pet_service_1.PetService])
], PetController);
exports.PetController = PetController;
//# sourceMappingURL=pet.controller.js.map