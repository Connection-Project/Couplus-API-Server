"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUpload = void 0;
const multer_s3_1 = __importDefault(require("multer-s3"));
const s3FileName_1 = require("../utils/s3FileName");
const aws_sdk_1 = require("aws-sdk");
const aws_config_1 = require("../config/aws.config");
exports.fileUpload = {
    storage: (0, multer_s3_1.default)({
        s3: new aws_sdk_1.S3(aws_config_1.awsConfig),
        bucket: 'pet-img',
        acl: 'private',
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        metadata: (_, file, cb) => {
            cb(null, { fileName: file.fieldname });
        },
        key: (_, file, cb) => {
            console.log(file);
            let filename = (0, s3FileName_1.s3FileName)(file);
            let location = '';
            if (file.fieldname === 'profile') {
                location = `pet/profile/${filename}`;
            }
            cb(null, location);
        },
    }),
    limits: {
        fieldSize: 2 * 1024 * 1024 * 1024,
        fileSize: 2 * 1024 * 1024 * 1024,
    },
};
//# sourceMappingURL=file-upload.interceptor.js.map