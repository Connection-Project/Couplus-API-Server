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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsService = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const s3FileName_1 = require("../../../utils/s3FileName");
let AwsService = class AwsService {
    constructor() {
        aws_sdk_1.default.config.update({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET_KEY,
            },
        });
        this.s3 = new aws_sdk_1.default.S3();
    }
    async uploadImage(file) {
        let filename = (0, s3FileName_1.s3FileName)(file);
        let location = '';
        if (file.fieldname === 'profile') {
            location = `pet/profile/${filename}`;
        }
        const params = {
            Bucket: 'pet-img',
            ACL: 'private',
            ContentType: 'image/png',
            Key: location,
            Body: file.buffer,
        };
        const result = await this.s3.upload(params).promise();
        return result;
    }
};
AwsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AwsService);
exports.AwsService = AwsService;
//# sourceMappingURL=aws.service.js.map