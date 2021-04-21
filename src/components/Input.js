import React, { useState } from 'react';


function Input(props) {
    let [text, setText] = useState("")
    const doKey = (event) => {
        setText(event.target.value);
    }
    
    const onAdd = () => {
        console.log("Click add", text);
        props.addTodo({text: text, done: false})
        setText("")
    }

    return (
    <div>
        <input type="text" value={text} onChange={doKey} />
        <button onClick={onAdd}>Add</button>
      </div>
    )
}


export default Input