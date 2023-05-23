import React, { useState } from 'react'
import '../functional-component/testf.css'
import { ListTodo } from '../list-todo-component/ListTodo';

const TodoList = () => {
    const [Todo, setTodo] = useState("");

    const [todoList, setTodolist] = useState([])

    const handleTodo = (event) => {
        setTodo(event.target.value)
        // console.log(Todo)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let templist = todoList;
        templist.push(Todo);
        setTodolist(templist);
        console.log(todoList);
        setTodo("");
    }

    return (
        <div className='student'>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleTodo} value={Todo} />
                <button type='submit'>Add</button>
            </form>

            <div>
                {todoList.map((item, index) => (
                    <ListTodo key={index} todoDetails={item}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList;