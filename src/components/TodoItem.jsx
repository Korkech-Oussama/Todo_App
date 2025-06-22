import React, { useState } from 'react'

const TodoItem = ({todo,handleDelete}) => {
    const [checked,setisChecked] = useState(false)
    const handleOnchange = () =>{
        setisChecked(!checked)
    }
  return (

        <li className="list-row mt-4">
            <div className="text-4xl font-thin opacity-30 tabular-nums">|</div>
            <div className="list-col-grow">
            <div className={!checked?'text-xl font-bold':'text-xl font-bold line-through'}>{todo.text}</div>
            <div className="text-xs uppercase font-semibold opacity-60">{checked?"Task Completed":"Task Ongoing"}</div>
            </div>
            <button className="btn btn-square btn-ghost">
                <input type="checkbox"  className="checkbox"
                 value={checked}
                 onChange={handleOnchange}/>
            </button>
            <button onClick={() =>handleDelete(todo.id)} className="btn btn-outline btn-error">
                <i>delete</i>
            </button>
        </li>
  )
}

export default TodoItem