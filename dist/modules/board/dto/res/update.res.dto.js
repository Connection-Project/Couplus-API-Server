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
exports.UnauthorizedUpdateBoard = exports.UpdateBoardFailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateBoardFailDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1421 }),
    __metadata("design:type", Number)
], UpdateBoardFailDto.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], UpdateBoardFailDto.prototype, "data", void 0);
exports.UpdateBoardFailDto = UpdateBoardFailDto;
class UnauthorizedUpdateBoard {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1422 }),
    __metadata("design:type", Number)
], UnauthorizedUpdateBoard.prototype, "resultCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: null }),
    __metadata("design:type", Object)
], UnauthorizedUpdateBoard.prototype, "data", void 0);
exports.UnauthorizedUpdateBoard = UnauthorizedUpdateBoard;
//# sourceMappingURL=update.res.dto.js.map