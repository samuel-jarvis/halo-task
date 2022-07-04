import { useCollection } from '../../../hooks/useCollection'
import '../../../styles/pages/notes.scss'
import NoteList from '../../../components/notes/NoteList'


export default function ImportantNotes() {
  const { data  } = useCollection('notes', ['important', '==', true])
  var taskaAmount = data.length

  return (
    <>
      <div className='task-details'>
        <p className='task-status'>You Have {taskaAmount} Starred Notes</p>
      </div>

      <div className='task-wrapper'>
        {data && <NoteList notes={data}/>}
        {!data && <p className='no-task'>No Important Notes</p>}
      </div>
    </>
  )
}
