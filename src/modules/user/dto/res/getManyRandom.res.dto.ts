import { ApiProperty } from '@nestjs/swagger';

export class GetManyRandomUserObj {
    @ApiProperty()
    userId: number;

    @ApiProperty()
    breed: string;

    @ApiProperty()
    name: string;

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
