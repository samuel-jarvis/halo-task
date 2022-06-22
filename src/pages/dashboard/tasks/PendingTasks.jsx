import TaskList from '../../../components/tasks/TaskList'
import { useCollection } from '../../../hooks/useCollection'
import '../../../styles/pages/tasks.scss'
import { Link } from 'react-router-dom'

export default function PendingTasks() {
  const { data, loading } = useCollection('tasks', ['completed', '==', false])

  var taskaAmount = data.length

  return (
    <>
      <div className='task-details'>
        <p className='task-status'>You Have {taskaAmount} Pending Tasks</p>     
      </div>

      <div className='task-wrapper'>
        <TaskList tasks={data}/>
      </div>
    </>
  )
}
