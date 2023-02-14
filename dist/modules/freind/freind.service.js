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
exports.FreindService = void 0;
const Freind_entity_1 = require("./../../models/Freind.entity");
const common_1 = require("@nestjs/common");
const freind_repository_1 = require("../../repositories/freind.repository");
const user_repository_1 = require("../../repositories/user.repository");
let FreindService = class FreindService {
    constructor(freindRepository, userRepository) {
        this.freindRepository = freindRepository;
        this.userRepository = userRepository;
    }
    async create(userId, body) {
        try {
            let resultCode = 0;
            const { freindId } = body;
            const user = await this.userRepository.findByKey('id', userId);
            const freind = await this.userRepository.findByKey('id', freindId);
            if (!user && !freind) {
                resultCode = 1702;
            }
            else {
                const newFreind = this.freindRepository.create();
                newFreind.userId = user.id;
                newFreind.freindId = freind.id;
                await this.freindRepository.save(newFreind);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1701, data: null } };
        }
    }
    async requestConfirm(userId, freindId) {
        try {
            let resultCode = 0;
            const user = await this.userRepository.findByKey('id', userId);
            const freind = await this.userRepository.findByKey('id', freindId);
            if (!user && !freind) {
                resultCode = 1712;
            }
            else {
                const newFreind = this.freindRepository.create();
                newFreind.userId = user.id;
                newFreind.freindId = freind.id;
                newFreind.status = Freind_entity_1.FreindStatus.confirmed;
                await this.freindRepository.save(newFreind);
                const requestFreind = await this.freindRepository.findOneByUserIdAndFreindId(user.id, freind.id);
                requestFreind.status = Freind_entity_1.FreindStatus.confirmed;
                await this.freindRepository.save(requestFreind);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: { items: null } } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1711, data: null } };
        }
    }
    async getRequests(userId) {
        try {
            let resultCode = 0;
            const items = [];
            const user = await this.userRepository.findByKey('id', userId);
            if (!user) {
                resultCode = 1722;
            }
            else {
                const requestFreinds = await this.freindRepository.findManyByStatus(user.id, 'request');
                for (let i = 0; i < requestFreinds.length; i++) {
                    const freind = await this.userRepository.findByKey('id', requestFreinds[i].userId);
                    items[i] = {
                        freindId: requestFreinds[i].userId,
                        image: freind.imagePath,
                        nickName: freind.nickName,
                    };
                }
            }
            return { data: { resultCode: resultCode, data: { items: items } } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1721, data: null } };
        }
    }
    async delete(userId, freindId) {
        try {
            let resultCode = 0;
            const user = await this.userRepository.findByKey('id', userId);
            const freind = await this.userRepository.findByKey('id', freindId);
            if (!user && !freind) {
                resultCode = 1732;
            }
            else {
                const freindStatus = await this.freindRepository.findOneByUserIdAndFreindId(user.id, freind.id);
                freindStatus.status = Freind_entity_1.FreindStatus.request;
                await this.freindRepository.save(freindStatus);
                await this.freindRepository.delete(user.id, freind.id);
                resultCode = 1;
            }
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1731, data: null } };
        }
    }
};
FreindService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [freind_repository_1.FreindRepository,
        user_repository_1.UserRepository])
], FreindService);
exports.FreindService = FreindService;
//# sourceMappingURL=freind.service.js.map