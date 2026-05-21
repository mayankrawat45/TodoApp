import React, { useState } from 'react'

const Header = ({todos,setTodos}) => {

  const [todo,setTodo]=useState("");

  function handleChange(e){
    setTodo(e.target.value)
  }

  function AddTodo(){

    if(todo){

      setTodos([
        ...todos,
        {
          id:crypto.randomUUID(),
          text:todo,
          completed:false
        }
      ])

      setTodo('')

    }else{
      alert('todo is Empty')
    }
  }

  return (

    <div className='border border-gray-100'>

      <div className='flex flex-col md:flex-row gap-5 md:gap-0 my-4 mx-5 justify-between items-center'>

        <h1 className='text-2xl md:text-3xl font-bold'>
          Todo App
        </h1>

        <div className='flex flex-col sm:flex-row gap-4 w-full md:w-auto'>

          <input
            className='border-[1.3px] border-blue-800 w-full sm:w-72 px-3 py-2 rounded-lg'
            placeholder='what needs to be done today'
            type="text"
            value={todo}
            onChange={handleChange}
          />

          <button
            className='bg-black text-white cursor-pointer rounded-lg px-5 py-2 font-semibold hover:bg-[#292828]'
            onClick={AddTodo}
          >
            Add
          </button>

        </div>

      </div>

    </div>
  )
}

export default Header