export declare class GetTodoObj {
    todoId: number;
    content: string;
    status: string;
}
export declare class GetTodoItems {
    items: GetTodoObj[];
}
export declare class GetTodoSuccessDto {
    resultCode: number;
    data: GetTodoItems;
}
export declare class GetTodoFailDto {
    resultCode: number;
    data: any;
}
