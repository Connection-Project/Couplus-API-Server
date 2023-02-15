import { ApiProperty } from '@nestjs/swagger';
import { MyPetsObj } from './getProfile.res.dto';

export class GetFriendProfileObj {
    @ApiProperty()
    userId: number;

    @ApiProperty()
    nickName: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    feedCount: number;

    @ApiProperty()
    friendCount: number;

    @ApiProperty({ description: '-1 : 요청 중,  0 : 친구 추가x,  1 : 친구' })
    friendStatus: number;

    @ApiProperty({ type: MyPetsObj })
    myPets: MyPetsObj[];
}

export class GetFriendProfileSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetFriendProfileObj })
    data: GetFriendProfileObj;
}

export class GetFriendProfileFailDto {
    @ApiProperty({ default: 1051 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
