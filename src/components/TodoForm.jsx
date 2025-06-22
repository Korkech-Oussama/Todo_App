import { useState } from 'react'

const TodoForm = ({onAdd}) => {
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!inputValue) return;
        onAdd(inputValue)
        setInputValue("")
    }
  return (
    <div className='container mt-20'>
        <form onSubmit={handleSubmit} className='flex justify-center'>
            <label className="input  items-center w-150 h-16 text-lg">
                <input type="text" id='input' value={inputValue} name='todo-input' className="p-5 grow" placeholder="Add a Todo"
                    onChange={(e)=>setInputValue(e.target.value)}/>
                <kbd className="kbd kbd-sm">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd>
                </label>
            <button type='submit' className="btn btn-soft p-5 h-16 w-20 ml-4 text-2xl">+</button>
            </form>
    </div>
  )
}

export default TodoForm