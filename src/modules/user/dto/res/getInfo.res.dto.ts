import { ApiProperty } from '@nestjs/swagger';

export class getInfoObj {
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

export class getInfoSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: getInfoObj })
    data: getInfoObj;
}

export class getInfoFailDto {
    @ApiProperty({ default: 1011 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
