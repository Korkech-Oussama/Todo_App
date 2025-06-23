import React, { useState } from 'react'

const TodoItem = ({todo,handleDelete,handleToggle}) => {
    
  return (

        <li className="list-row mt-4">
            <div className="text-4xl font-thin opacity-30 tabular-nums">|</div>
            <div className="list-col-grow">
            <div className={!todo.completed?'text-xl font-bold':'text-xl font-bold line-through'}>{todo.text}</div>
            <div className="text-xs uppercase font-semibold opacity-60">{todo.completed?"Task Completed":"Task Ongoing"}</div>
            </div>
            <button className="btn btn-square btn-ghost">
                <input type="checkbox"  className="checkbox"
                 checked={todo.completed}
                 onChange={() => handleToggle(todo.id)}/>
            </button>
            <button onClick={() =>handleDelete(todo.id)} className="btn btn-outline btn-error">
                <i>delete</i>
            </button>
        </li>
  )
}

export default TodoItem