import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TodoApp = () => {
  const [todos,setTodos] = useState(() =>{
     const stored = localStorage.getItem('todos')
       return stored ? JSON.parse(stored) : []
  })

  const addTodo = (text) =>{
        const newTodo = {
            id:Date.now(),
            text,
            completed:false
        }
        setTodos([...todos,newTodo])
  }
  const handleToggle = (id) =>{
        const updatedTodos = todos.map(todo =>
          todo.id === id ? {...todo, completed :!todo.completed} : todo
        )
        setTodos(updatedTodos)
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
        <h1 className='text-5xl font-semibold'>Todo App</h1>
        <TodoForm onAdd={addTodo}/>
        <TodoList handleDelete={handleDelete} todos={todos} handleToggle={handleToggle}/>
    </div>
  )
}

export default TodoApp