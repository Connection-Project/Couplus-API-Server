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
exports.BoardCommentReply = void 0;
const typeorm_1 = require("typeorm");
const BoardComment_entity_1 = require("./BoardComment.entity");
const User_entity_1 = require("./User.entity");
let BoardCommentReply = class BoardCommentReply {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BoardCommentReply.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 2000 }),
    __metadata("design:type", String)
], BoardCommentReply.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BoardComment_entity_1.BoardComment, (comment) => comment.reply, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", BoardComment_entity_1.BoardComment)
], BoardCommentReply.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, (user) => user.reply),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", User_entity_1.User)
], BoardCommentReply.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], BoardCommentReply.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], BoardCommentReply.prototype, "updatedAt", void 0);
BoardCommentReply = __decorate([
    (0, typeorm_1.Entity)({ name: 'BoardCommentReplys' }),
    __metadata("design:paramtypes", [Object])
], BoardCommentReply);
exports.BoardCommentReply = BoardCommentReply;
//# sourceMappingURL=BoardCommentReply.entity.js.map