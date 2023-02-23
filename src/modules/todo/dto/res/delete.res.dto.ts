import { ApiProperty } from '@nestjs/swagger';

export class DeleteTodoFailDto {
    @ApiProperty({ default: 2041 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
