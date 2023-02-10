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
exports.HashTag = void 0;
const typeorm_1 = require("typeorm");
const Feed_entity_1 = require("./Feed.entity");
let HashTag = class HashTag {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], HashTag.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, comment: '해시태그명' }),
    __metadata("design:type", String)
], HashTag.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Feed_entity_1.Feed, (feed) => feed.hashtag, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Feed_entity_1.Feed)
], HashTag.prototype, "feed", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], HashTag.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], HashTag.prototype, "updatedAt", void 0);
HashTag = __decorate([
    (0, typeorm_1.Entity)({ name: 'HashTags' }),
    __metadata("design:paramtypes", [Object])
], HashTag);
exports.HashTag = HashTag;
//# sourceMappingURL=HashTag.entity.js.map