import { ApiProperty } from '@nestjs/swagger';

export class GetInfoObj {
    @ApiProperty()
    email: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    nickName: string;

    @ApiProperty()
    registType: string;
}

export class GetInfoSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetInfoObj })
    data: GetInfoObj;
}

export class GetInfoFailDto {
    @ApiProperty({ default: 1011 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
