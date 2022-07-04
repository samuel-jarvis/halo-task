import { useState, useRef } from 'react'
import React from 'react'
import '../../styles/pages/addnote.scss'
import { FaCheck, FaPlus } from "react-icons/fa";
import { projectFirestore } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'



const noteColor = ["#FFFFFF", '#E0F7FA', '#B2DFDB', '#FFCCBC'];


export default function AddNote() {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [newNoteColor, setNewNoteColor] = useState('white')
  const filledtitle = useRef(null)
  const fillednote = useRef(null)
  const {user} = useAuthContext()

  var time =(new Date().toLocaleDateString())

  const data = {title, note, newNoteColor, time, important: false, user: user.uid}
  
  const addTask = async () => {
    console.log(data)

    if(!title && !note) {
      alert('Please enter a title and note')
      return
    }

    try {
      await projectFirestore.collection('notes').add(data)
      setNewNoteColor('white')
      setTitle('')
      setNote('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='add-task' style={{backgroundColor: `${newNoteColor}`}}>
      <form >
        <input
          className='input input--title' 
          type="text"
          placeholder='Title'
          required
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          ref={filledtitle}
        />

        <textarea name="" id="" cols="20" rows="3"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>

        <div className="note_extra">
          <div className="select-color">
            {noteColor.map((color, index) => (
              <div 
                className="note-color"
                key={color}
                onClick={() => setNewNoteColor(color)}
                style={{backgroundColor: color}}
                value
                ref={fillednote}
              />
            ))}
          </div>

          <div className="submit-btn" onClick={addTask}>
            <FaPlus className='submit-icon'/>
            Note
          </div>

        </div>
        
        {/* <input type="submit" value={<FaCheck/>} /> */}

      </form>
    </div>
  )
}
