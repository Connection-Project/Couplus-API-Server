"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const aws_service_1 = require("../../lib/aws/src/aws.service");
const MyPets_entity_1 = require("../../models/MyPets.entity");
const User_entity_1 = require("../../models/User.entity");
const myPet_repository_1 = require("../../repositories/myPet.repository");
const user_repository_1 = require("../../repositories/user.repository");
const pet_controller_1 = require("./pet.controller");
const pet_service_1 = require("./pet.service");
let PetModule = class PetModule {
};
PetModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([MyPets_entity_1.MyPet, User_entity_1.User])],
        controllers: [pet_controller_1.PetController],
        providers: [pet_service_1.PetService, myPet_repository_1.MyPetRepository, user_repository_1.UserRepository, aws_service_1.AwsService],
    })
], PetModule);
exports.PetModule = PetModule;
//# sourceMappingURL=pet.module.js.map