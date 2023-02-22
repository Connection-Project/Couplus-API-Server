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
exports.FriendService = void 0;
const common_1 = require("@nestjs/common");
const Friend_entity_1 = require("../../models/Friend.entity");
const friend_repository_1 = require("../../repositories/friend.repository");
const myPet_repository_1 = require("../../repositories/myPet.repository");
const user_repository_1 = require("../../repositories/user.repository");
let FriendService = class FriendService {
    constructor(friendRepository, userRepository, myPetRepository) {
        this.friendRepository = friendRepository;
        this.userRepository = userRepository;
        this.myPetRepository = myPetRepository;
    }
    async create(userId, body) {
        try {
            let resultCode = 0;
            const { friendId } = body;
            console.log(friendId);
            const user = await this.userRepository.findByKey('id', userId);
            const friend = await this.userRepository.findByKey('id', friendId);
            if (!user && !friend) {
                resultCode = 1702;
            }
            else {
                const newfriend = this.friendRepository.create();
                newfriend.userId = user.id;
                newfriend.friendId = friend.id;
                await this.friendRepository.save(newfriend);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1701, data: null } };
        }
    }
    async requestConfirm(userId, friendId) {
        try {
            let resultCode = 0;
            const user = await this.userRepository.findByKey('id', userId);
            const friend = await this.userRepository.findByKey('id', friendId);
            if (!user && !friend) {
                resultCode = 1712;
            }
            else {
                const newfriend = this.friendRepository.create();
                newfriend.userId = user.id;
                newfriend.friendId = friend.id;
                newfriend.status = Friend_entity_1.FriendStatus.confirmed;
                await this.friendRepository.save(newfriend);
                const requestfriend = await this.friendRepository.findOneByUserIdAndfriendId(user.id, friend.id);
                requestfriend.status = Friend_entity_1.FriendStatus.confirmed;
                await this.friendRepository.save(requestfriend);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: null } };
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
                const requestfriends = await this.friendRepository.findManyByStatus(user.id, 'request');
                for (let i = 0; i < requestfriends.length; i++) {
                    let friend = await this.userRepository.findByKey('id', requestfriends[i].userId);
                    let profileImage = null;
                    let pet = await this.myPetRepository.findAll(userId);
                    pet.forEach((o) => {
                        if (o.represent)
                            profileImage = o.imagePath;
                    });
                    items[i] = {
                        friendId: requestfriends[i].userId,
                        image: profileImage,
                        nickName: friend.nickName,
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
    async delete(userId, friendId) {
        try {
            let resultCode = 0;
            const user = await this.userRepository.findByKey('id', userId);
            const friend = await this.userRepository.findByKey('id', friendId);
            if (!user && !friend) {
                resultCode = 1732;
            }
            else {
                await this.friendRepository.delete(friend.id, user.id);
                await this.friendRepository.delete(user.id, friend.id);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1731, data: null } };
        }
    }
};
FriendService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [friend_repository_1.FriendRepository,
        user_repository_1.UserRepository,
        myPet_repository_1.MyPetRepository])
], FriendService);
exports.FriendService = FriendService;
//# sourceMappingURL=freind.service.js.map