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
exports.FeedComment = void 0;
const typeorm_1 = require("typeorm");
const Feed_entity_1 = require("./Feed.entity");
const User_entity_1 = require("./User.entity");
let FeedComment = class FeedComment {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FeedComment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 2000 }),
    __metadata("design:type", String)
], FeedComment.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Feed_entity_1.Feed, (feed) => feed.comment),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Feed_entity_1.Feed)
], FeedComment.prototype, "feed", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, (user) => user.feedComment),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", User_entity_1.User)
], FeedComment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], FeedComment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], FeedComment.prototype, "updatedAt", void 0);
FeedComment = __decorate([
    (0, typeorm_1.Entity)({ name: 'FeedComments' }),
    __metadata("design:paramtypes", [Object])
], FeedComment);
exports.FeedComment = FeedComment;
//# sourceMappingURL=FeedComment.entity.js.map