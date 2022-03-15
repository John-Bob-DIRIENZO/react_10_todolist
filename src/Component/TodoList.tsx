import Card from "./Card";
import {TodoListInterface} from "../Interface/TodoInterface";

export default function TodoList({todos, setTodos}: TodoListInterface) {
    return (
        <div className='row row-cols-2 row-cols-md-4 g-2 px-3'>
            {todos.map((todo, index) => (
                <Card todo={todo} setTodos={setTodos} key={todo.id}/>
            ))}
        </div>
    )
}
