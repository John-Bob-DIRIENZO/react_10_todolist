import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TodoInterface} from "./Interface/TodoInterface";
import {BaseTodos} from "./Data/BaseTodos";
import AddTodosForm from "./Component/AddTodosForm";
import TodoList from "./Component/TodoList";

function App() {
    const [todos, setTodos] = useState<TodoInterface[]>(BaseTodos)
    const [isAuthorized, setIsAuthorized] = useState<boolean>(true)

    useEffect(() => {
        const undoneTodos = todos.filter(todo => (todo.status === 'todo'))
        setIsAuthorized(undoneTodos.length < 10)
    }, [todos])

    return (
        <>
            <AddTodosForm setTodos={setTodos} isAuthorized={isAuthorized}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </>
    );
}

export default App;
