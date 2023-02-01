import { Injectable } from '@nestjs/common';
import AWS from 'aws-sdk';
import { s3FileName } from 'src/utils/s3FileName';
import { S3DeleteParam } from './dto/delete.type';

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
        } else if (file.fieldname === 'board') {
            location = `board/${filename}`;
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

    s3Delete(param: S3DeleteParam) {
        this.s3.deleteObject(param, (err, data) => {
            if (err) console.log('S3 - Delete Fail' + err);
            else console.log('S3 - Delete Success');
        });
    }
}
