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
exports.User = void 0;
const BoardComment_entity_1 = require("./BoardComment.entity");
const typeorm_1 = require("typeorm");
const Board_entity_1 = require("./Board.entity");
const MyPets_entity_1 = require("./MyPets.entity");
const BoardCommentReply_entity_1 = require("./BoardCommentReply.entity");
let User = class User {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "nickName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "registType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "imageKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "imagePath", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MyPets_entity_1.MyPet, (pet) => pet.user, { cascade: true }),
    __metadata("design:type", Array)
], User.prototype, "pet", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Board_entity_1.Board, (board) => board.user),
    __metadata("design:type", Array)
], User.prototype, "board", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => BoardComment_entity_1.BoardComment, (comment) => comment.user),
    __metadata("design:type", Array)
], User.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => BoardCommentReply_entity_1.BoardCommentReply, (reply) => reply.user),
    __metadata("design:type", Array)
], User.prototype, "reply", void 0);
User = __decorate([
    (0, typeorm_1.Entity)({ name: 'Users' }),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=User.entity.js.map