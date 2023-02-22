import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoFailDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
