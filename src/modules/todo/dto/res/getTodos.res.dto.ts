import { ApiProperty } from '@nestjs/swagger';

export class GetToDoListObj {
    @ApiProperty()
    todoId: number;

    @ApiProperty()
    content: string;

    @ApiProperty()
    date: string;

    @ApiProperty()
    status: string;
}

export class GetToDoListItems {
    @ApiProperty({ type: [GetToDoListObj] })
    items: GetToDoListObj;
}

export class GetToDoListSuccessDto {
    @ApiProperty({ default: 1 })
    resultCode: number;

    @ApiProperty({ type: GetToDoListItems })
    data: GetToDoListItems;
}

export class GetToDoListFailDto {
    @ApiProperty({ default: 2011 })
    resultCode: number;

    @ApiProperty({ default: null })
    data: any;
}
