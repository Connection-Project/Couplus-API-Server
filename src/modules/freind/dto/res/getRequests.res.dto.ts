import { ApiProperty } from '@nestjs/swagger';

export class GetReuestFreindsObj {
    @ApiProperty()
    freindId: number;

    @ApiProperty()
    image: string;

    @ApiProperty()
    nickName: string;
}

export class GetRequestFreindSuccessItems {
    @ApiProperty({ type: GetReuestFreindsObj })
    items: GetReuestFreindsObj[];
}

export class GetRequestFreindSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetRequestFreindSuccessItems })
    data: GetRequestFreindSuccessItems;
}

export class GetRequestFreindFailDto {
    @ApiProperty({ default: 1721 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
