import React from 'react'
import { useState, useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../../styles/pages/addtask.scss'
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [today, setToday] = useState(false)

  const {user} = useAuthContext();
  const navigate = useNavigate();


  // state for erroe and handling useeffect
  const [error, setError] = useState('')

 
  // array of tasks data to pass in to the database
  const data = {task, description, date, today, user: user.uid, completed: false}

  const addDocument = async (data) => {
    try {
      await projectFirestore.collection('tasks').add(data)
      navigate("/dashboard")
    } catch (error) {
      setError('Error adding document')
      //console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    addDocument(data)
  }

  return (
    <div className='form-wrapper task-form'>
      <h1>Add Task</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="task-name">Task Name</label>
          <input 
            type="text" 
            id="task-name" 
            placeholder="Task Name"
            required
            value={task}
            onChange={(e) => setTask(e.target.value)}
           />
        </div>

        <div className="form-group">
          <label htmlFor="task-description">Task Description</label>
          <input 
            type="text" 
            id="task-description" 
            placeholder="Task Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Due Date</label>
          <input 
            type="date" 
            id="task-date"
            required
            value={date} 
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group form-group--flex">
          <label htmlFor="">Important</label>
          <input 
            type="checkbox" 
            id="task-today"
            name='today' 
            value={today}
            onChange={(e) => setToday(!today)}
          />
        </div>

        <div className="form-group">
          <input type="submit" value="Add Task" />
        </div>
      </form>
    </div>
  )
}

