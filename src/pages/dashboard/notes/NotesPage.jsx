import TaskList from '../../../components/tasks/TaskList'
import { useCollection } from '../../../hooks/useCollection'
import '../../../styles/pages/tasks.scss'


import React from 'react'
import AddNote from '../../../components/notes/AddNote'

export default function NotesList() {
  const { data, loading } = useCollection('tasks', ['today', '==', true])
  var taskaAmount = data.length

  return (
    <>
     <div className='task-details'>
        <p className='task-status'>You Have {taskaAmount} Notes</p>
      </div>

      <div className='task-wrapper'>
        <AddNote />
        <TaskList tasks={data}/>
      </div>
    </>
  )
}
