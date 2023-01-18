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
const user_repository_1 = require("../../repositories/user.repository");
const crypto_1 = require("../../utils/crypto");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async emailSignUp(body) {
        try {
            const { email } = body;
            const existUser = await this.userRepository.findByKey('email', email);
            let status = 0;
            let resultCode = 0;
            if (existUser) {
                status = 201;
                resultCode = 1001;
            }
            else {
                const createBody = Object.assign({ registType: 'email' }, body);
                const newUser = await this.userRepository.create(createBody);
                await this.userRepository.save(newUser);
                status = 200;
                resultCode = 1;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1002, data: null } };
        }
    }
    async socialSignUp(body) {
        try {
            const { email } = body;
            const existUser = await this.userRepository.findByKey('email', email);
            let status = 0;
            let resultCode = 0;
            if (existUser) {
                status = 201;
                resultCode = 1001;
            }
            else {
                const createBody = Object.assign({ registType: 'kakao' }, body);
                const newUser = this.userRepository.create(createBody);
                await this.userRepository.save(newUser);
                status = 200;
                resultCode = 1;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1003, data: null } };
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
            return { status: 200, data: { resultCode: 1, data: data } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1011, data: null } };
        }
    }
    async update(userId, body) {
        try {
            const { password, name, phone, nickName } = body;
            const user = await this.userRepository.findByKey('id', userId);
            if (password.replace(/ /g, '') !== '') {
                user.password = (0, crypto_1.GenDigestPwd)(password);
            }
            if (name.replace(/ /g, '') !== '')
                user.name = name;
            if (nickName.replace(/ /g, '') !== '')
                user.nickName = nickName;
            if (phone.replace(/ /g, '') !== '')
                user.phone = phone;
            await this.userRepository.save(user);
            return { status: 200, data: { resultCode: 1, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1021, data: null } };
        }
    }
    async delete(userId) {
        try {
            await this.userRepository.delete(userId);
            return { status: 200, data: { resultCode: 1, data: null } };
        }
        catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1031, data: null } };
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map