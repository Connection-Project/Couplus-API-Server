import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoReqDto {
    @ApiProperty()
    content: string;
}
