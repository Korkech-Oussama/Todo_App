import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,handleDelete}) => {
  return (
    <div className='flex justify-center mt-5'>
        <ul className="list w-180 bg-base-100 rounded-box shadow-md">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Todos List</li>
            {todos.map((todo) =>(<TodoItem handleDelete={handleDelete} todo={todo} key={todo.id}/>))}
        </ul>   
   </div>
  )
}

export default TodoList