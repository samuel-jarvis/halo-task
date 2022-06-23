import React from 'react'
import '../../styles/pages/addnote.scss'
import { FaCheck } from "react-icons/fa";
// import { useState } from 'react'



const noteColor = ['#E0F7FA', '#B2DFDB', '#FFCCBC', '#CFD8DC'];


export default function AddNote() {
  // const [title, setTitle] = useState('')
  // const [note, setNote] = useState('')
  // const [noteColor, setNoteColor] = useState('white')

  return (
    <div className='add-task'>
      <form action="">
        <input
          className='input input--title' 
          type="text"
          placeholder='Title'
          // value={title} 
          // onChange={(e) => setTitle(e.target.value)}

        />
        <textarea name="" id="" cols="30" rows="10">

        </textarea>
        
        <div className="select-color">
          {noteColor.map((color, index) => (
            <div 
              className="note-color"
              key={color}
              // onClick={setNoteColor(color)}
              style={{backgroundColor: color}}
              value
            />
          ))}
        </div>
        <div className="submit-btn">
          <FaCheck style={{color: 'blue'}} />
        </div>

        {/* <input type="submit" value={<FaCheck/>} /> */}

      </form>
    </div>
  )
}
