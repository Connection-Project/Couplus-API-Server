import { ApiProperty } from '@nestjs/swagger';

export class GetReuestfriendsObj {
    @ApiProperty()
    friendId: number;

    @ApiProperty()
    image: string;

    @ApiProperty()
    nickName: string;
}

export class GetRequestfriendSuccessItems {
    @ApiProperty({ type: GetReuestfriendsObj })
    items: GetReuestfriendsObj[];
}

export class GetRequestfriendSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetRequestfriendSuccessItems })
    data: GetRequestfriendSuccessItems;
}

export class GetRequestfriendFailDto {
    @ApiProperty({ default: 1721 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
