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
exports.FreindRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Freind_entity_1 = require("../models/Freind.entity");
const typeorm_2 = require("typeorm");
let FreindRepository = class FreindRepository {
    constructor(freindRepository) {
        this.freindRepository = freindRepository;
    }
    create() {
        return this.freindRepository.create();
    }
    async save(freind) {
        return await this.freindRepository.save(freind);
    }
    async findOneByUserIdAndFreindId(userId, freindId) {
        return await this.freindRepository
            .createQueryBuilder('f')
            .where('userId = :userId', { userId: freindId })
            .andWhere('freindId = :freindId', { freindId: userId })
            .getOne();
    }
    async findManyByStatus(userId, status) {
        return await this.freindRepository
            .createQueryBuilder('f')
            .where('status = :status', { status: status })
            .andWhere('freindId = :freindId', { freindId: userId })
            .getMany();
    }
    async delete(userId, freindId) {
        await this.freindRepository
            .createQueryBuilder('f')
            .delete()
            .where('userId = :userId', { userId: userId })
            .andWhere('freindId = :freindId', { freindId: freindId })
            .execute();
        return;
    }
    async getDeleteAllByUserId(userId) {
        await this.freindRepository
            .createQueryBuilder('f')
            .delete()
            .where('userId = :userId', { userId: userId })
            .execute();
        return;
    }
    async getDeleteAllByFreindId(freindId) {
        await this.freindRepository
            .createQueryBuilder('f')
            .delete()
            .where('freindId = :freindId', { freindId: freindId })
            .execute();
        return;
    }
    async getCount(userId) {
        return await this.freindRepository
            .createQueryBuilder('f')
            .where('status = :status', { status: Freind_entity_1.FreindStatus.confirmed })
            .andWhere('userId = :userId', { userId: userId })
            .getCount();
    }
};
FreindRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Freind_entity_1.Freind)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FreindRepository);
exports.FreindRepository = FreindRepository;
//# sourceMappingURL=freind.repository.js.map