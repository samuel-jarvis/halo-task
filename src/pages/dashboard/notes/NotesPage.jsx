import { useCollection } from '../../../hooks/useCollection'
import '../../../styles/pages/notes.scss'
import NoteList from  '../../../components/notes/NoteList'

import AddNote from '../../../components/notes/AddNote'

export default function NotesList() {
  const { data } = useCollection('notes')
  var taskaAmount = data.length


  return (
    <>
     <div className='task-details'>
        <p className='task-status'>You Have {taskaAmount} Notes</p>
      </div>

      <div className='note-wrapper'>
        <AddNote />
        <NoteList notes={data}/>
      </div>
    </>
  )
}
