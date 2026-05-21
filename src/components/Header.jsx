import React, { useState } from 'react'

const Header = ({todos,setTodos}) => {
  const [todo,setTodo]=useState("");
  function handleChange(e){
    setTodo(e.target.value)
  }
  function AddTodo(){
    if(todo){
      setTodos([...todos,{id:crypto.randomUUID(),text:todo,completed:false}])
      setTodo('')
    }else{
      alert('todo is Empty')
    }
  }
  return (
    <div className='border border-gray-100 '>
        <div className='flex my-4 mx-5 justify-between'>
            <h1 className='text-3xl font-bold'>Todo App</h1>
            <div className='flex gap-5.5'>
                <input className='border-[1.3px] border-blue-800  w-72 px-3 rounded-lg' placeholder='what needs to be done today' type="text" value={todo} onChange={handleChange} />
                <button className='bg-black text-white cursor-pointer rounded-lg px-5 py-2 font-semibold hover:bg-[#292828]' onClick={AddTodo}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default Header