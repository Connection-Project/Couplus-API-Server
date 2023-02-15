import { Injectable } from '@nestjs/common';
import { Friend, FriendStatus } from 'src/models/Freind.entity';
import { User } from 'src/models/User.entity';
import { FriendRepository } from 'src/repositories/friend.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { ReturnResDto } from '../common/dto/return/return.res.dto';
import { CreatefriendReqDto } from './dto/req/create.req.dto';

@Injectable()
export class FriendService {
    constructor(
        private readonly friendRepository: FriendRepository,
        private readonly userRepository: UserRepository,
    ) {}

    async create(userId: number, body: CreatefriendReqDto): Promise<ReturnResDto> {
        try {
            let resultCode = 0;
            const { friendId } = body;
            console.log(friendId);
            const user: User = await this.userRepository.findByKey('id', userId);
            const friend: User = await this.userRepository.findByKey('id', friendId);

            // ! 나 와 추가하려는 유저가 모두 존재해야 추가가 가능
            if (!user && !friend) {
                resultCode = 1702;
            } else {
                const newfriend = this.friendRepository.create();
                newfriend.userId = user.id;
                newfriend.friendId = friend.id;
                await this.friendRepository.save(newfriend);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: null } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1701, data: null } };
        }
    }

    async requestConfirm(userId: number, friendId: number): Promise<ReturnResDto> {
        try {
            let resultCode = 0;
            const user: User = await this.userRepository.findByKey('id', userId);
            const friend: User = await this.userRepository.findByKey('id', friendId);
            if (!user && !friend) {
                resultCode = 1712;
            } else {
                const newfriend = this.friendRepository.create();
                newfriend.userId = user.id;
                newfriend.friendId = friend.id;
                newfriend.status = FriendStatus.confirmed;
                await this.friendRepository.save(newfriend);

                // ! 요청 보낸 친구의 상태도 변경
                const requestfriend: Friend = await this.friendRepository.findOneByUserIdAndfriendId(
                    user.id,
                    friend.id,
                );
                requestfriend.status = FriendStatus.confirmed;
                await this.friendRepository.save(requestfriend);
                resultCode = 1;
            }
            return { data: { resultCode: resultCode, data: null } };
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
                const requestfriends: Friend[] = await this.friendRepository.findManyByStatus(
                    user.id,
                    'request',
                );
                for (let i = 0; i < requestfriends.length; i++) {
                    // ! 요청 보낸 친구의 정보
                    const friend: User = await this.userRepository.findByKey(
                        'id',
                        requestfriends[i].userId,
                    );
                    items[i] = {
                        friendId: requestfriends[i].userId,
                        image: friend.imagePath,
                        nickName: friend.nickName,
                    };
                }
            }
            return { data: { resultCode: resultCode, data: { items: items } } };
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1721, data: null } };
        }
    }

    async delete(userId: number, friendId: number): Promise<ReturnResDto> {
        try {
            let resultCode = 0;
            const user: User = await this.userRepository.findByKey('id', userId);
            const friend: User = await this.userRepository.findByKey('id', friendId);
            if (!user && !friend) {
                resultCode = 1732;
            } else {
                // ! 해당 친구 상태 변경
                const friendStatus: Friend = await this.friendRepository.findOneByUserIdAndfriendId(
                    user.id,
                    friend.id,
                );
                friendStatus.status = FriendStatus.request;
                await this.friendRepository.save(friendStatus);

                // ! 선택한 친구 삭제
                await this.friendRepository.delete(user.id, friend.id);
                resultCode = 1;
            }
        } catch (err) {
            console.log(err);
            return { data: { resultCode: 1731, data: null } };
        }
    }
}
