import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const   ToDoItem = ({text,completed,id,editTodo,deleteTodo,toggleCompleted}) => {
  const [edited,setEdited]=useState(false);
  const [editedText,setEditedtext]=useState(text)
  function handleChange(e){
    setEditedtext(e.target.value);
  }
  function handleClick(){
    editTodo(id,editedText);
    setEdited(false)
  }
  
  return (
    <div>
      {edited ? (
        <>
        <div className='border border-black w-[95%] mx-auto flex justify-between px-5 py-3 rounded-lg'>
          <input className='border border-blue-800 p-2 rounded-lg w-[80%]'  type="text" value={editedText} onChange={handleChange} />
          <button className='font-bold border-none px-4 bg-black text-white rounded-xl cursor-pointer hover:bg-[#272728e3]' onClick={handleClick}>change</button>
        </div>
        </>
      ):(
        <div className='border border-black w-[95%] mx-auto flex justify-between px-5 py-3 rounded-lg'>
        <p>{text}</p>
        <div className='flex gap-3.5'>
            <input className='w-4' type="checkbox" checked={completed} onChange={()=>toggleCompleted(id)} />
            <FaEdit className='size-5 cursor-pointer' onClick={()=>{setEdited(true)}}/>   
            <MdDelete className='size-5 cursor-pointer' height={55} onClick={()=>deleteTodo(id)}/>
        </div>
    </div>
      )}
    </div>
  )
}

export default ToDoItem