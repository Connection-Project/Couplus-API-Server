import { Injectable } from '@nestjs/common';
import AWS from 'aws-sdk';
import { s3FileName } from 'src/utils/s3FileName';

@Injectable()
export class AwsService {
    private readonly s3: AWS.S3;

    constructor() {
        AWS.config.update({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET_KEY,
            },
        });
        this.s3 = new AWS.S3();
    }

    async uploadImage(file: any) {
        let filename = s3FileName(file);
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
}
