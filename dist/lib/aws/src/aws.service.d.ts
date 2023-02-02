import AWS from 'aws-sdk';
import { S3DeleteParam } from './dto/delete.type';
export declare class AwsService {
    private readonly s3;
    constructor();
    uploadImage(file: any): Promise<AWS.S3.ManagedUpload.SendData>;
    s3Delete(param: S3DeleteParam): Promise<void>;
}
