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
exports.FriendRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Freind_entity_1 = require("../models/Freind.entity");
const typeorm_2 = require("typeorm");
let FriendRepository = class FriendRepository {
    constructor(friendRepository) {
        this.friendRepository = friendRepository;
    }
    create() {
        return this.friendRepository.create();
    }
    async save(friend) {
        return await this.friendRepository.save(friend);
    }
    async findOneByUserIdAndfriendId(userId, friendId) {
        return await this.friendRepository
            .createQueryBuilder('f')
            .where('userId = :userId', { userId: friendId })
            .andWhere('friendId = :friendId', { friendId: userId })
            .getOne();
    }
    async findManyByStatus(userId, status) {
        return await this.friendRepository
            .createQueryBuilder('f')
            .where('status = :status', { status: status })
            .andWhere('friendId = :friendId', { friendId: userId })
            .getMany();
    }
    async delete(userId, friendId) {
        await this.friendRepository
            .createQueryBuilder('f')
            .delete()
            .where('userId = :userId', { userId: userId })
            .andWhere('friendId = :friendId', { friendId: friendId })
            .execute();
        return;
    }
    async getDeleteAllByUserId(userId) {
        await this.friendRepository
            .createQueryBuilder('f')
            .delete()
            .where('userId = :userId', { userId: userId })
            .execute();
        return;
    }
    async getDeleteAllByfriendId(friendId) {
        await this.friendRepository
            .createQueryBuilder('f')
            .delete()
            .where('friendId = :friendId', { friendId: friendId })
            .execute();
        return;
    }
    async getCount(userId) {
        return await this.friendRepository
            .createQueryBuilder('f')
            .where('status = :status', { status: Freind_entity_1.FriendStatus.confirmed })
            .andWhere('userId = :userId', { userId: userId })
            .getCount();
    }
};
FriendRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Freind_entity_1.Friend)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FriendRepository);
exports.FriendRepository = FriendRepository;
//# sourceMappingURL=friend.repository.js.map