import { ApiProperty } from '@nestjs/swagger';

export class GetManyRandomUserObj {
    @ApiProperty()
    userId: number;

    @ApiProperty({
        description: 'null값이 넘어간다면 등록된 강아지가 한 마리도 없어서 예외처리 해주어야함',
    })
    feed: string;

    @ApiProperty()
    image: string;
}

export class GetManyRandomUserSuccessItems {
    @ApiProperty({ type: GetManyRandomUserObj })
    items: GetManyRandomUserObj[];
}

export class GetManyRandomUserSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetManyRandomUserSuccessItems })
    data: GetManyRandomUserSuccessItems;
}

export class GetManyRandomUserFailDto {
    @ApiProperty({ default: 1041 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
