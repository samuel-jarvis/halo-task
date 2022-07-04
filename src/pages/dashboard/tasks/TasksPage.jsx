import React from 'react'
import TaskList from '../../../components/tasks/TaskList'
import { useCollection } from '../../../hooks/useCollection'
import '../../../styles/pages/tasks.scss'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";



export default function Tasks() {
  const { data, loading } = useCollection('tasks',)

  var taskaAmount = data.length
  
  return (
    <>
      <div className='task-details'>
        <p className='task-status'>You Have {taskaAmount} Tasks</p>
        
        <Link to='addtask' className='add-btn'><FaPlus className='fa-plus' /> Task</Link>
      </div>

      <div className='task-wrapper'>
        <TaskList tasks={data}/>
      </div>
    </>
  )
}
