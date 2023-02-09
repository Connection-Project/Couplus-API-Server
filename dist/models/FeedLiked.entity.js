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
exports.FeedLiked = void 0;
const User_entity_1 = require("./User.entity");
const typeorm_1 = require("typeorm");
const Feed_entity_1 = require("./Feed.entity");
let FeedLiked = class FeedLiked {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], FeedLiked.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], FeedLiked.prototype, "feedId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    __metadata("design:type", User_entity_1.User)
], FeedLiked.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Feed_entity_1.Feed, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    __metadata("design:type", Feed_entity_1.Feed)
], FeedLiked.prototype, "feed", void 0);
FeedLiked = __decorate([
    (0, typeorm_1.Entity)({ name: 'FeedLiked' }),
    __metadata("design:paramtypes", [Object])
], FeedLiked);
exports.FeedLiked = FeedLiked;
//# sourceMappingURL=FeedLiked.entity.js.map