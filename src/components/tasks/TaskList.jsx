import React from 'react'
import { projectFirestore } from '../../firebase/config'
import { FaTimes, FaRegBell } from "react-icons/fa";


export default function TaskList({tasks}) {
  const completedTask = (id) => {
    projectFirestore.collection('tasks').doc(id)
      .update({completed: true})
  }

  const uncompletedTask = (id) => {
    projectFirestore.collection('tasks').doc(id)
      .update({completed: false})
  }

  const deleteTask = (id) => {

    let proceed = window.confirm("Are you sure you want to delete this task?");

    if (proceed) {
      projectFirestore.collection('tasks').doc(id).delete()
    }     
  }

  return (
    tasks.map(task => (
      <div className={`task ${task.completed ? 'completed' : 'pending'}`} key={task.id}>
        <h3 className='task_title'>{task.task} {task.today ? <FaRegBell className='fa-today' /> : ''} </h3>
        <p className='task_description'>{task.description.substring(0, 60)}</p>
        
        <div className="task_information">
          <div className='task_extra'>
            <p className='task_date'>{task.date}</p>
            {/* <p>{task.today ? 'Today' : ''}</p> */}
          </div>

          {
            task.completed ? 
              <button onClick={() => uncompletedTask(task.id)} className="completed-btn">Completed</button> :  
              <button onClick={() => completedTask(task.id)}>Mark as Done</button>
          }
        </div>
        <p className='delete' onClick={() => deleteTask(task.id)}><FaTimes className='fa-icon fa-delete' /></p> 
        
      </div>
    ))
  )
  
}
