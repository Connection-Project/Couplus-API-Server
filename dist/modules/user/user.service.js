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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const aws_service_1 = require("../../lib/aws/src/aws.service");
const feed_repository_1 = require("../../repositories/feed.repository");
const freind_repository_1 = require("../../repositories/freind.repository");
const myPet_repository_1 = require("../../repositories/myPet.repository");
const user_repository_1 = require("../../repositories/user.repository");
const crypto_1 = require("../../utils/crypto");
let UserService = class UserService {
    constructor(awsService, userRepository, freindRepository, feedRepository, myPetRepository) {
        this.awsService = awsService;
        this.userRepository = userRepository;
        this.freindRepository = freindRepository;
        this.feedRepository = feedRepository;
        this.myPetRepository = myPetRepository;
    }
    async emailSignUp(file, body) {
        try {
            const { email } = body;
            const existUser = await this.userRepository.findByKey('email', email);
            let resultCode = 0;
            if (existUser) {
                resultCode = 1001;
            }
            else {
                let imageKey = null;
                let imagePath = null;
                if (file) {
                    const res = await this.awsService.uploadImage(file);
                    imageKey = res.Key;
                    imagePath = res.Location;
                }
                const createBody = Object.assign({ registType: 'email', imageKey,
                    imagePath }, body);
                const newUser = await this.userRepository.create(createBody);
                await this.userRepository.save(newUser);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1002, data: null } };
        }
    }
    async socialSignUp(file, body) {
        try {
            const { email } = body;
            const existUser = await this.userRepository.findByKey('email', email);
            let resultCode = 0;
            if (existUser) {
                resultCode = 1001;
            }
            else {
                let imageKey = null;
                let imagePath = null;
                if (file) {
                    const res = await this.awsService.uploadImage(file);
                    imageKey = res.Key;
                    imagePath = res.Location;
                }
                const createBody = Object.assign({ registType: 'kakao', imageKey,
                    imagePath }, body);
                const newUser = this.userRepository.create(createBody);
                await this.userRepository.save(newUser);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1003, data: null } };
        }
    }
    async getInfo(userId) {
        try {
            const user = await this.userRepository.findByKey('id', userId);
            const data = {
                email: user.email,
                name: user.name,
                nickName: user.nickName,
                phone: user.phone,
                registType: user.registType,
            };
            return { data: { resultCode: 1, data: data } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1011, data: null } };
        }
    }
    async update(userId, file, body) {
        try {
            const { password, name, phone, nickName } = body;
            const user = await this.userRepository.findByKey('id', userId);
            if (password.replace(/ /g, '') !== '') {
                user.password = (0, crypto_1.GenDigestPwd)(password);
            }
            console.log(body);
            if (name.replace(/ /g, '') !== '')
                user.name = name;
            if (nickName.replace(/ /g, '') !== '')
                user.nickName = nickName;
            if (phone.replace(/ /g, '') !== '')
                user.phone = phone;
            if (file) {
                const res = await this.awsService.uploadImage(file);
                if (res) {
                    this.awsService.s3Delete({
                        Bucket: 'pet-img',
                        Key: user.imageKey,
                    });
                    user.imageKey = res.Key;
                    user.imagePath = res.Location;
                }
                else {
                    common_1.Logger.log('ERROR - S3 Upload Failed');
                }
            }
            await this.userRepository.save(user);
            return { data: { resultCode: 1, data: null } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1021, data: null } };
        }
    }
    async delete(userId) {
        try {
            const user = await this.userRepository.findByKey('id', userId);
            await this.awsService.s3Delete({
                Bucket: 'pet-img',
                Key: user.imageKey,
            });
            await this.freindRepository.getDeleteAllByUserId(userId);
            await this.freindRepository.getDeleteAllByFreindId(userId);
            await this.userRepository.delete(userId);
            return { data: { resultCode: 1, data: null } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1031, data: null } };
        }
    }
    async getUserRandom() {
        try {
            const user = await this.userRepository.getManyRandomUser();
            console.log(user.length);
            const items = [];
            for (let i = 0; i < user.length; i++) {
                const pet = await this.myPetRepository.getRepresentPetOne(user[i].id);
                const pets = await this.myPetRepository.findAll(user[i].id);
                let breed = pet ? pet.breed : null;
                items[i] = {
                    userId: user[i].id,
                    breed: pets.length > 1 ? `${breed} 외 ${pets.length - 1}마리` : breed,
                    name: pet ? pet.name : null,
                    image: pet ? pet.imagePath : null,
                };
            }
            return { data: { resultCode: 1, data: { items: items } } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1041, data: null } };
        }
    }
    async getProfile(userId) {
        try {
            const user = await this.userRepository.findByKey('id', userId);
            const myPet = (await this.myPetRepository.findAll(userId)).reverse();
            const myPets = [];
            let image = null;
            for (let i = 0; i < myPet.length; i++) {
                if (myPet[i].represent)
                    image = myPet[i].imagePath;
                myPets[i] = {
                    myPetId: myPet[i].id,
                    breed: myPet[i].breed,
                    name: myPet[i].name,
                };
            }
            const data = {
                userId: user.id,
                nickName: user.nickName,
                image: image,
                feedCount: await this.feedRepository.getCount(userId),
                freindCount: await this.freindRepository.getCount(userId),
                myPets: myPets,
            };
            return { data: { resultCode: 1, data: data } };
        }
        catch (err) {
            console.log(err);
            return { data: { resultCode: 1051, data: null } };
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [aws_service_1.AwsService,
        user_repository_1.UserRepository,
        freind_repository_1.FreindRepository,
        feed_repository_1.FeedRepository,
        myPet_repository_1.MyPetRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map