import TaskList from '../../../components/tasks/TaskList'
import { useCollection } from '../../../hooks/useCollection'
import '../../../styles/pages/tasks.scss'
import { Link } from 'react-router-dom'

export default function TodayTask() {
  const { data, loading } = useCollection('tasks', ['today', '==', true])
  var taskaAmount = data.length

  return (
    <>
     <div className='task-details'>
        <p className='task-status'>You Have {taskaAmount} Important Tasks</p>
      </div>

      <div className='task-wrapper'>
        <TaskList tasks={data}/>
      </div>
    </>
  )
}
