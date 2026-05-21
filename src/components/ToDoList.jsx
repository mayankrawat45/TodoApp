import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({todos,setTodos}) => {
    const [filter, setFilter] = useState("all");
    function deleteTodo(id){
        setTodos(todos=>todos.filter(todo=>todo.id!=id))
    }
    function editTodo(id,text){
        setTodos(todos=>todos.map((todo)=>{
            return todo.id===id?{...todo,text}:todo
        }))
    }

    function toggleCompleted(id){
        setTodos(todos=>todos.map((todo)=>{
            return todo.id===id?{...todo,completed: !todo.completed}:todo
        }))
    }
    const filteredTodos = todos.filter((item) => {

        if (filter === "active") {
            return !item.completed
        }

        if (filter === "completed") {
            return item.completed
        }

        return true
    })
    console.log(todos)
  return (
    <div className='my-10 border border-black w-[75%] rounded-xl mx-auto'>
        <div className='my-5 mx-5 flex gap-2.5'>
            <button className={`rounded-xl py-2 px-4 font-medium cursor-pointer border border-gray-200 ${filter==="all"?"bg-black text-white ":"hover:bg-gray-100"}`}onClick={()=>setFilter("all")}>All</button>
            <button className={`rounded-xl py-2 px-4 font-medium cursor-pointer border border-gray-200 ${filter==="active"?"bg-black text-white ":"hover:bg-gray-100"}`}onClick={()=>setFilter("active")}>Active</button>
            <button className={`rounded-xl py-2 px-4 font-medium cursor-pointer border border-gray-200 ${filter==="completed"?"bg-black text-white ":"hover:bg-gray-100"}`}onClick={()=>setFilter("completed")}>Completed</button>
        </div>
        <div className='my-5 mx-5 p-10 rounded-xl border border-black flex flex-col gap-6'>
            <h2 className='font-medium text-3xl'>Todo's</h2>
            <div className='flex flex-col gap-4'>
                {
                    filteredTodos.length === 0 ? <div className='text-2xl font-bold text-center'>No todos</div> :
                       filteredTodos.map((item)=>{
                        return (
                            <ToDoItem id={item.id} text={item.text} completed={item.completed} editTodo={editTodo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} key={item.id}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ToDoList