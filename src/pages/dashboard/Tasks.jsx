import React from 'react'
import {data} from './data'
import TaskList from '../../components/TaskList'


export default function Tasks() {
  
  <TaskList />

  return (
    <div className='task-wrapper'>
      {
        data.map(<TaskList />)
      }
    </div>
      
  )
}
