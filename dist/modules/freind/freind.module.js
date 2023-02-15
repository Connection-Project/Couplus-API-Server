"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Friend_entity_1 = require("../../models/Friend.entity");
const User_entity_1 = require("../../models/User.entity");
const friend_repository_1 = require("../../repositories/friend.repository");
const user_repository_1 = require("../../repositories/user.repository");
const freind_controller_1 = require("./freind.controller");
const freind_service_1 = require("./freind.service");
let FriendModule = class FriendModule {
};
FriendModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([User_entity_1.User, Friend_entity_1.Friend])],
        providers: [freind_service_1.FriendService, user_repository_1.UserRepository, friend_repository_1.FriendRepository],
        controllers: [freind_controller_1.FriendController],
    })
], FriendModule);
exports.FriendModule = FriendModule;
//# sourceMappingURL=freind.module.js.map