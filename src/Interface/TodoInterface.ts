import {TodoStatus} from "../Type/Types";
import React, {Dispatch} from "react";

export interface TodoInterface {
    id: number,
    title: string,
    content: string,
    status: TodoStatus
}

export interface TodoInterfaceProps {
    todo: {
        id: number,
        title: string,
        content: string,
        status: TodoStatus
    },
    setTodos: Dispatch<any>
}

export interface TodoListInterface {
    todos: TodoInterface[],
    setTodos: Dispatch<any>
}
