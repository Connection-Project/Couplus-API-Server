import { ApiProperty } from '@nestjs/swagger';

export class GetTodoObj {
    @ApiProperty()
    todoId: number;

    @ApiProperty()
    content: string;

    @ApiProperty()
    status: string;
}

export class GetTodoItems {
    @ApiProperty({ type: [GetTodoObj] })
    items: GetTodoObj[];
}

export class GetTodoSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetTodoItems })
    data: GetTodoItems;
}

export class GetTodoFailDto {
    @ApiProperty({ default: 2021 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
