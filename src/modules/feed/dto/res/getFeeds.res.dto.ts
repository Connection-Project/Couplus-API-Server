import { ApiProperty } from '@nestjs/swagger';

export class GetFeedsObj {
    @ApiProperty()
    feedId: number;

    @ApiProperty()
    image: string;
}

export class GetFeedsSuccessItems {
    @ApiProperty({ type: GetFeedsObj })
    items: GetFeedsObj[];
}

export class GetFeedsSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetFeedsSuccessItems })
    data: GetFeedsSuccessItems;
}

export class GetFeedsFailDto {
    @ApiProperty({ default: 1811 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
