import {TodoInterface, TodoInterfaceProps} from "../Interface/TodoInterface";

export default function Card({todo, setTodos}: TodoInterfaceProps) {

    const changeTodoStatus = () => {
        setTodos((prev: TodoInterface[]) => {
            return prev.map((element: TodoInterface) => {
                if (todo.id === element.id) {
                    const newStatus = element.status === 'todo' ? 'done' : 'todo'
                    return {...element, status: newStatus}
                } else {
                    return element
                }
            })
        });
    }

    const deleteTodo = () => {
        setTodos((prev: TodoInterface[]) => {
            return prev.filter((element: TodoInterface) => (todo.id !== element.id))
        });
    }

    return (
        <div className="col">
            <div className={`card ${todo.status === 'todo' ? 'bg-light' : 'bg-success'}`}>
                <div className="card-body">
                    <h5 className="card-title">{todo.title}</h5>
                    <p className="card-text">{todo.content}</p>
                    <button className='btn btn-primary d-block mx-auto mb-3' onClick={changeTodoStatus}>Change status</button>
                    <button className='btn btn-danger d-block mx-auto' onClick={deleteTodo}>Delete Todo</button>
                </div>
            </div>
        </div>
    )
}
