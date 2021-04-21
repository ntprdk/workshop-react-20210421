import './App.css';
import Input from './components/Input'
import TodoItem from './components/TodoItem';
import React, { useState } from 'react';

function Todo() {
    const startTodo = []
    const [todos, setTodos] = useState(startTodo)

    const addTodo = (todo) => {
        setTodos((oldTodo) => [...oldTodo, todo])
    }

    const onClick = (i) => {
        let newTodo = todos.map((task, index) => {
            return index === i ? { ...task, done: !task.done } : task;
        });
        setTodos(newTodo);
    }

    const getCount = () => {
        console.log("called getcount")
        let noDone = 0
        todos.forEach((item) => {
            if (!item.done) noDone++
        })
        return (
            <div>{noDone} remaining out of {todos.length}</div>
        )
    }

    return (
        <div className="App">
            <Input addTodo={addTodo} />
            <div>{getCount()}</div>
            <ul>
                {
                    todos.map((item, index) => (
                        <li key={index}><TodoItem onClick={() => onClick(index)} item={item} /></li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Todo;
