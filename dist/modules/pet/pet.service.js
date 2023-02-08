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
exports.PetService = void 0;
const common_1 = require("@nestjs/common");
const aws_service_1 = require("../../lib/aws/src/aws.service");
const myPet_repository_1 = require("../../repositories/myPet.repository");
const user_repository_1 = require("../../repositories/user.repository");
const date_1 = require("../../utils/date");
let PetService = class PetService {
    constructor(myPetRepository, userRepository, awsService) {
        this.myPetRepository = myPetRepository;
        this.userRepository = userRepository;
        this.awsService = awsService;
    }
    async create(userId, file, body) {
        try {
            const user = await this.userRepository.findByKey('id', userId);
            let imageKey = null;
            let imagePath = null;
            if (file) {
                const res = await this.awsService.uploadImage(file);
                imageKey = res.Key;
                imagePath = res.Location;
            }
            let represent = false;
            const myPets = await this.myPetRepository.findAll(userId);
            if (myPets.length === 0)
                represent = true;
            const createBody = Object.assign({ user: user, imageKey,
                imagePath,
                represent }, body);
            const myPet = this.myPetRepository.create(createBody);
            await this.myPetRepository.save(myPet);
            return { status: 200, data: { resultCode: 1, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1301, data: null } };
        }
    }
    async getMyPet(userId, myPetId) {
        try {
            const myPet = await this.myPetRepository.findOneById(userId, myPetId);
            let data = null;
            const birthDay = myPet.birthDay.toISOString().substring(0, 10).split('-');
            const togetherDay = myPet.togetherDay.toISOString().substring(0, 10).split('-');
            data = {
                myPetId: myPet.id,
                represent: myPet.represent,
                name: myPet.name,
                breed: myPet.breed,
                gender: myPet.gender,
                imagePath: myPet.imagePath,
                birthYear: birthDay[0],
                birthMonth: birthDay[1],
                birthDate: birthDay[2],
                togetherYear: togetherDay[0],
                togetherMonth: togetherDay[1],
                togetherDate: togetherDay[2],
            };
            return { status: 200, data: { resultCode: 1, data: data } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1341, data: null } };
        }
    }
    async getMyPets(userId) {
        try {
            const myPet = await this.myPetRepository.findAll(userId);
            const items = [];
            for (let i = 0; i < myPet.length; i++) {
                items[i] = {
                    myPetId: myPet[i].id,
                    represent: myPet[i].represent,
                    name: myPet[i].name,
                    age: (0, date_1.getYearDiff)(new Date(myPet[i].birthDay), new Date()),
                    breed: myPet[i].breed,
                    gender: myPet[i].gender,
                    birthDay: myPet[i].birthDay.toISOString().substring(0, 10),
                    togetherDay: (0, date_1.getDateDiff)(new Date(myPet[i].togetherDay), new Date()),
                    imagePath: myPet[i].imagePath,
                };
            }
            return { status: 200, data: { resultCode: 1, data: { items: items } } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1311, data: null } };
        }
    }
    async update(userId, myPetId, file, body) {
        try {
            const { name, represent, breed, gender, birthDay, togetherDay } = body;
            let status = 0;
            let resultCode = 0;
            const myPet = await this.myPetRepository.findOneById(userId, myPetId);
            if (myPet) {
                if (name !== '')
                    myPet.name = name;
                if (breed !== '')
                    myPet.breed = breed;
                if (gender !== '')
                    myPet.gender = gender;
                if (birthDay !== '' && birthDay !== null)
                    myPet.birthDay = new Date(birthDay);
                if (togetherDay !== '' && birthDay !== null)
                    myPet.togetherDay = new Date(togetherDay);
                if (JSON.parse(represent)) {
                    const myPets = await this.myPetRepository.findAll(userId);
                    for (let i = 0; i < myPets.length; i++) {
                        if (myPets[i].represent) {
                            myPets[i].represent = false;
                            await this.myPetRepository.save(myPets[i]);
                        }
                    }
                    myPet.represent = true;
                }
                if (file) {
                    const res = await this.awsService.uploadImage(file);
                    if (res) {
                        this.awsService.s3Delete({
                            Bucket: 'pet-img',
                            Key: myPet.imageKey,
                        });
                        myPet.imageKey = res.Key;
                        myPet.imagePath = res.Location;
                    }
                    else {
                        common_1.Logger.log('ERROR - S3 Upload Failed');
                    }
                }
                await this.myPetRepository.save(myPet);
                status = 200;
                resultCode = 1;
            }
            else {
                status = 201;
                resultCode = 1322;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1321, data: null } };
        }
    }
    async delete(userId, myPetId) {
        try {
            const myPet = await this.myPetRepository.findOneById(userId, myPetId);
            await this.awsService.s3Delete({
                Bucket: 'pet-img',
                Key: myPet.imageKey,
            });
            await this.myPetRepository.delete(myPetId, userId);
            return { status: 200, data: { resultCode: 1, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1331, data: null } };
        }
    }
};
PetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [myPet_repository_1.MyPetRepository,
        user_repository_1.UserRepository,
        aws_service_1.AwsService])
], PetService);
exports.PetService = PetService;
//# sourceMappingURL=pet.service.js.map