import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoApp = () => {
  const storedItems = JSON.parse(localStorage.getItem('todos')) || []
  const [todos,setTodos] = useState(storedItems)

  const addTodo = (text) =>{
        const newTodo = {
            id:Date.now(),
            text,
            completed:false
        }
        setTodos([...todos,newTodo])
  }
  useEffect(() =>{
      localStorage.setItem('todos',JSON.stringify(todos))
      
  },[todos])

  const handleDelete = (id) =>{
    const deletedTask = todos.filter((todo) => todo.id !== id )
    setTodos(deletedTask)
      
  }
  console.log(localStorage)
  return (
    <div className='container'>
        <TodoForm onAdd={addTodo}/>
        <TodoList handleDelete={handleDelete} todos={todos}/>
    </div>
  )
}

export default TodoApp