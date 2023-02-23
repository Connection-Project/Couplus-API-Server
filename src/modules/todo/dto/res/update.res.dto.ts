import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoFailDto {
    @ApiProperty({ default: 2031 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
