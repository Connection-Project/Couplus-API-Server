"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const User_entity_1 = require("../../models/User.entity");
const aws_service_1 = require("../../lib/aws/src/aws.service");
const Freind_entity_1 = require("../../models/Freind.entity");
const freind_repository_1 = require("../../repositories/freind.repository");
const user_repository_1 = require("../../repositories/user.repository");
const Feed_entity_1 = require("../../models/Feed.entity");
const feed_repository_1 = require("../../repositories/feed.repository");
const MyPets_entity_1 = require("../../models/MyPets.entity");
const myPet_repository_1 = require("../../repositories/myPet.repository");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([User_entity_1.User, Freind_entity_1.Freind, Feed_entity_1.Feed, MyPets_entity_1.MyPet])],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, aws_service_1.AwsService, user_repository_1.UserRepository, freind_repository_1.FreindRepository, feed_repository_1.FeedRepository, myPet_repository_1.MyPetRepository],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map