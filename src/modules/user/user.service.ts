import { Injectable, Logger } from '@nestjs/common';
import { AwsService } from 'src/lib/aws/src/aws.service';
import { User } from 'src/models/User.entity';
import { UserRepository } from 'src/repositories/user.repository';
import { GenDigestPwd } from 'src/utils/crypto';
import { EmailRegistUserReqDto, SocialRegistUserReqDto } from './dto/req/create.dto';
import { UpdateUserReqDto } from './dto/req/update.dto';
import { getInfoObj } from './dto/res/getInfo.res.dto';

@Injectable()
export class UserService {
    constructor(private readonly awsService: AwsService, private userRepository: UserRepository) {}

    async emailSignUp(file: File, body: EmailRegistUserReqDto): Promise<any> {
        try {
            const { email } = body;
            const existUser: User = await this.userRepository.findByKey('email', email);
            let status = 0;
            let resultCode = 0;
            if (existUser) {
                // * 이미 존재 하는 계정
                status = 201;
                resultCode = 1001;
            } else {
                let imageKey = null;
                let imagePath = null;
                if (file) {
                    const res = await this.awsService.uploadImage(file);
                    imageKey = res.Key;
                    imagePath = res.Location;
                }
                const createBody = {
                    registType: 'email',
                    imageKey,
                    imagePath,
                    ...body,
                };
                const newUser: User = await this.userRepository.create(createBody);
                await this.userRepository.save(newUser);
                status = 200;
                resultCode = 1;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1002, data: null } };
        }
    }

    async socialSignUp(file: File, body: SocialRegistUserReqDto): Promise<any> {
        try {
            const { email } = body;
            const existUser: User = await this.userRepository.findByKey('email', email);
            let status = 0;
            let resultCode = 0;
            if (existUser) {
                // * 이미 존재 하는 계정
                status = 201;
                resultCode = 1001;
            } else {
                let imageKey = null;
                let imagePath = null;
                if (file) {
                    const res = await this.awsService.uploadImage(file);
                    imageKey = res.Key;
                    imagePath = res.Location;
                }
                const createBody = {
                    registType: 'kakao',
                    imageKey,
                    imagePath,
                    ...body,
                };
                const newUser: User = this.userRepository.create(createBody);
                await this.userRepository.save(newUser);
                status = 200;
                resultCode = 1;
            }
            return { status: status, data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1003, data: null } };
        }
    }

    async getInfo(userId: number): Promise<any> {
        try {
            const user: User = await this.userRepository.findByKey('id', userId);
            const data: getInfoObj = {
                email: user.email,
                name: user.name,
                nickName: user.nickName,
                phone: user.phone,
                registType: user.registType,
            };
            return { status: 200, data: { resultCode: 1, data: data } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1011, data: null } };
        }
    }

    async update(userId: number, file: File, body: UpdateUserReqDto): Promise<any> {
        try {
            const { password, name, phone, nickName } = body;
            const user: User = await this.userRepository.findByKey('id', userId);
            if (password.replace(/ /g, '') !== '') {
                user.password = GenDigestPwd(password);
            }

            if (name.replace(/ /g, '') !== '') user.name = name;
            if (nickName.replace(/ /g, '') !== '') user.nickName = nickName;
            if (phone.replace(/ /g, '') !== '') user.phone = phone;
            // ! 파일이 존재할 시 프로필 이미지 수정
            if (file) {
                const res = await this.awsService.uploadImage(file);
                if (res) {
                    // ! 기존 파일 삭제
                    this.awsService.s3Delete({
                        Bucket: 'pet-img',
                        Key: user.imageKey,
                    });
                    user.imageKey = res.Key;
                    user.imagePath = res.Location;
                } else {
                    Logger.log('ERROR - S3 Upload Failed');
                }
            }
            await this.userRepository.save(user);
            return { status: 200, data: { resultCode: 1, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1021, data: null } };
        }
    }

    async delete(userId: number): Promise<any> {
        try {
            const user: User = await this.userRepository.findByKey('id', userId);
            // ! 기존 파일 삭제
            await this.awsService.s3Delete({
                Bucket: 'pet-img',
                Key: user.imageKey,
            });
            await this.userRepository.delete(userId);
            return { status: 200, data: { resultCode: 1, data: null } };
        } catch (err) {
            console.log(err);
            return { status: 401, data: { resultCode: 1031, data: null } };
        }
    }
}
