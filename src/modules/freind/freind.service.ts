import { Freind, FreindStatus } from './../../models/Freind.entity';
import { Injectable } from '@nestjs/common';
import { User } from 'src/models/User.entity';
import { FreindRepository } from 'src/repositories/freind.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreateFreindReqDto } from './dto/req/create.req.dto';

@Injectable()
export class FreindService {
    constructor(
        private readonly freindRepository: FreindRepository,
        private readonly userRepository: UserRepository,
    ) {}

    async create(userId: number, body: CreateFreindReqDto): Promise<ReturnResDto> {
        try {
            let resultCode = 0;
            const { freindId } = body;
            const user: User = await this.userRepository.findByKey('id', userId);
            const freind: User = await this.userRepository.findByKey('id', freindId);

            // ! 나 와 추가하려는 유저가 모두 존재해야 추가가 가능
            if (!user && !freind) {
                resultCode = 1702;
            } else {
                const newFreind = this.freindRepository.create();
                newFreind.userId = user.id;
                newFreind.freindId = freind.id;
                await this.freindRepository.save(newFreind);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1701, data: null } };
        }
    }

    async requestConfirm(userId: number, freindId: number): Promise<ReturnResDto> {
        try {
            let resultCode = 0;
            const user: User = await this.userRepository.findByKey('id', userId);
            const freind: User = await this.userRepository.findByKey('id', freindId);
            if (!user && !freind) {
                resultCode = 1712;
            } else {
                const newFreind = this.freindRepository.create();
                newFreind.userId = user.id;
                newFreind.freindId = freind.id;
                newFreind.status = FreindStatus.confirmed;
                await this.freindRepository.save(newFreind);

                // ! 요청 보낸 친구의 상태도 변경
                const requestFreind: Freind = await this.freindRepository.findOneByUserIdAndFreindId(
                    user.id,
                    freind.id,
                );
                requestFreind.status = FreindStatus.confirmed;
                await this.freindRepository.save(requestFreind);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: { items: null } } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1711, data: null } };
        }
    }

    async getRequests(userId: number): Promise<ReturnResDto> {
        try {
            let resultCode = 0;
            const items = [];
            const user: User = await this.userRepository.findByKey('id', userId);
            if (!user) {
                resultCode = 1722;
            } else {
                const requestFreinds: Freind[] = await this.freindRepository.findManyByStatus(
                    user.id,
                    'request',
                );
                for (let i = 0; i < requestFreinds.length; i++) {
                    // ! 요청 보낸 친구의 정보
                    const freind: User = await this.userRepository.findByKey(
                        'id',
                        requestFreinds[i].userId,
                    );
                    items[i] = {
                        freindId: requestFreinds[i].userId,
                        image: freind.imagePath,
                        nickName: freind.nickName,
                    };
                }
            }
            return { data: { resultCode: resultCode, data: { items: items } } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1721, data: null } };
        }
    }

    async delete(userId: number, freindId: number): Promise<ReturnResDto> {
        try {
            let resultCode = 0;
            const user: User = await this.userRepository.findByKey('id', userId);
            const freind: User = await this.userRepository.findByKey('id', freindId);
            if (!user && !freind) {
                resultCode = 1732;
            } else {
                // ! 해당 친구 상태 변경
                const freindStatus: Freind = await this.freindRepository.findOneByUserIdAndFreindId(
                    user.id,
                    freind.id,
                );
                freindStatus.status = FreindStatus.request;
                await this.freindRepository.save(freindStatus);

                // ! 선택한 친구 삭제
                await this.freindRepository.delete(user.id, freind.id);
                resultCode = 1;
            }
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1731, data: null } };
        }
    }
}
