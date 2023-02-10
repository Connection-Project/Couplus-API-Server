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
exports.Feed = void 0;
const typeorm_1 = require("typeorm");
const FeedComment_entity_1 = require("./FeedComment.entity");
const FeedImage_entity_1 = require("./FeedImage.entity");
const HashTag_entity_1 = require("./HashTag.entity");
const User_entity_1 = require("./User.entity");
let Feed = class Feed {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Feed.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Feed.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, (user) => user.feed, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", User_entity_1.User)
], Feed.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Feed.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Feed.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FeedImage_entity_1.FeedImage, (image) => image.feed, { cascade: true }),
    __metadata("design:type", Array)
], Feed.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FeedComment_entity_1.FeedComment, (comment) => comment.feed, { cascade: true }),
    __metadata("design:type", Array)
], Feed.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => HashTag_entity_1.HashTag, (hashtag) => hashtag.feed, { cascade: true }),
    __metadata("design:type", Array)
], Feed.prototype, "hashtag", void 0);
Feed = __decorate([
    (0, typeorm_1.Entity)({ name: 'Feed' }),
    __metadata("design:paramtypes", [Object])
], Feed);
exports.Feed = Feed;
//# sourceMappingURL=Feed.entity.js.map