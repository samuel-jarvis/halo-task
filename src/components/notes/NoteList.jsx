import React from 'react'
import { projectFirestore } from '../../firebase/config'
import { FaRegStar, FaStar, FaTimes } from "react-icons/fa";


export default function NoteList({notes}) {
  const markNote = (id) => {
    projectFirestore.collection('notes').doc(id)
      .update({important: true})
  }

  const unMarkNote = (id) => {
    projectFirestore.collection('notes').doc(id)
      .update({important: false})
  }

  const deleteNote = (id) => {
    let proceed = window.confirm("Are you sure you want to delete this note?");
    if (proceed) {
      projectFirestore.collection('notes').doc(id).delete()
    }     
  }

  return (
    notes.map(note => (
      <div key={note.id} className='single-note'
        style={{
            backgroundColor:  `${note.newNoteColor ? note.newNoteColor : 'white'}`
          }}>
        <h3 className='note_title'>{note.title}</h3>
        <p className='note_description'>{note.note}</p>

        <div className='note_extra'>
          <p className='note_time'>{note.time}</p>
          {
            note.important ? 
            <FaStar className='note_star' onClick={() => unMarkNote(note.id)} /> :
            <FaRegStar className='note_star' onClick={() => markNote(note.id)} />
          }
          
        </div>
        
        
        <p onClick={() => deleteNote(note.id)}>
          <FaTimes className='fa-delete-note' />
        </p>
        
      </div>
    ))
  )
  
}
