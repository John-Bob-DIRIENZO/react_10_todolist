import {TodoInterface} from "../Interface/TodoInterface";
import {useState} from "react";

// @ts-ignore
export default function AddTodosForm({setTodos}) {

    const [newTodo, setNewTodo] = useState<TodoInterface>({
        id: 0,
        content: "",
        status: "todo",
        title: ""
    })

    const handleChange = (event: any) => {
        const name = event.target.id;
        setNewTodo((prevState: TodoInterface) => ({...prevState, [name]: event.target.value}))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setNewTodo((prevState: TodoInterface) => ({...prevState, id: Math.floor(Math.random() * 99999999)}))
        setTodos((prev: TodoInterface[]) => [newTodo, ...prev]);
    }

    return (
        <form className='mx-auto py-5' style={{maxWidth: '400px'}} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" aria-describedby="emailHelp"
                       onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Content</label>
                <textarea className="form-control" id="content" onChange={handleChange}/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
