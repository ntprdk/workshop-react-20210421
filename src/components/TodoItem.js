import React, { useState } from 'react';
import './TodoItem.css'

function TodoItem(props) {

    return (
        <div onClick={props.onClick} className={props.item.done ? 'is-done' : ''}>
            { props.item.text }
        </div>
    )
}


export default TodoItem