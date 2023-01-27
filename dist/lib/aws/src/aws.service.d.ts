import AWS from 'aws-sdk';
export declare class AwsService {
    private readonly s3;
    constructor();
    uploadImage(file: any): Promise<AWS.S3.ManagedUpload.SendData>;
}
