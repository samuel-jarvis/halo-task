import TaskList from '../../../components/tasks/TaskList'
import { useCollection } from '../../../hooks/useCollection'
import '../../../styles/pages/tasks.scss'
import { Link } from 'react-router-dom'

export default function CompletedTask() {
  const { data, loading } = useCollection('tasks', ['completed', '==', true])
  var taskaAmount = data.length

  return (
    <>
      <div className='task-details'>
        <p className='task-status'>You Have Completed {taskaAmount} Tasks</p>
      </div>

      <div className='task-wrapper'>
        <TaskList tasks={data}/>
        {!data && <p className='no-task'>No Completed Tasks</p>}
      </div>
    </>
  )
}
