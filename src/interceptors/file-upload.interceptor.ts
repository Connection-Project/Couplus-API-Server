import multerS3 from 'multer-s3';
import { s3FileName } from 'src/utils/s3FileName';
import { S3Client } from '@aws-sdk/client-s3';

export const fileUpload = {
    storage: multerS3({
        s3: new S3Client({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET_KEY,
            },
        }),
        bucket: 'pet-img',
        acl: 'private',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: (_, file, cb) => {
            cb(null, { fileName: file.fieldname });
        },
        key: (_, file, cb) => {
            console.log(file);
            let filename = s3FileName(file);
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
