"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const user_repository_1 = require("./../../repositories/user.repository");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const User_entity_1 = require("../../models/User.entity");
const aws_service_1 = require("../../lib/aws/src/aws.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([User_entity_1.User])],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, aws_service_1.AwsService, user_repository_1.UserRepository],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map