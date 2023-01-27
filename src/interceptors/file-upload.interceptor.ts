import multerS3 from 'multer-s3';
import { s3FileName } from 'src/utils/s3FileName';
import { S3 } from 'aws-sdk';
import { awsConfig } from 'src/config/aws.config';

export const fileUpload = {
    storage: multerS3({
        s3: new S3(awsConfig),
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
