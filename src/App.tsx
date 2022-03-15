import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TodoInterface} from "./Interface/TodoInterface";
import {BaseTodos} from "./Data/BaseTodos";
import AddTodosForm from "./Component/AddTodosForm";
import TodoList from "./Component/TodoList";

function App() {
    const [todos, setTodos] = useState<TodoInterface[]>(BaseTodos)

    return (
        <>
            <AddTodosForm setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </>
    );
}

export default App;
