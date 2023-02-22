export declare class GetToDoListObj {
    todoId: number;
    content: string;
    date: string;
    status: string;
}
export declare class GetToDoListItems {
    items: GetToDoListObj;
}
export declare class GetToDoListSuccessDto {
    resultCode: number;
    data: GetToDoListItems;
}
export declare class GetToDoListFailDto {
    resultCode: number;
    data: any;
}
