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
exports.BoardLiked = void 0;
const Board_entity_1 = require("./Board.entity");
const User_entity_1 = require("./User.entity");
const typeorm_1 = require("typeorm");
let BoardLiked = class BoardLiked {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], BoardLiked.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], BoardLiked.prototype, "boardId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    __metadata("design:type", User_entity_1.User)
], BoardLiked.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Board_entity_1.Board, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    __metadata("design:type", Board_entity_1.Board)
], BoardLiked.prototype, "board", void 0);
BoardLiked = __decorate([
    (0, typeorm_1.Entity)({ name: 'BoardLiked' }),
    __metadata("design:paramtypes", [Object])
], BoardLiked);
exports.BoardLiked = BoardLiked;
//# sourceMappingURL=BoardLiked.entity.js.map