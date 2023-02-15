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
exports.Friend = exports.FriendStatus = void 0;
const typeorm_1 = require("typeorm");
var FriendStatus;
(function (FriendStatus) {
    FriendStatus["request"] = "request";
    FriendStatus["confirmed"] = "confirmed";
})(FriendStatus = exports.FriendStatus || (exports.FriendStatus = {}));
let Friend = class Friend {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Friend.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Friend.prototype, "friendId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: FriendStatus, default: FriendStatus.request }),
    __metadata("design:type", String)
], Friend.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Friend.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Friend.prototype, "updatedAt", void 0);
Friend = __decorate([
    (0, typeorm_1.Entity)({ name: 'friends' }),
    __metadata("design:paramtypes", [Object])
], Friend);
exports.Friend = Friend;
//# sourceMappingURL=Freind.entity.js.map