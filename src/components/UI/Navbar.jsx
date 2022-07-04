import '../../styles/components/navbar.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import {FaBars, FaCaretDown} from "react-icons/fa";
import ProfileCard from './ProfileCard';



export default function Navbar({toggleSidebar}) {
  const {user} = useAuthContext()

  const [show, setShow] = useState(false);
  const handleCLick = () => {
    show ? setShow(false) : setShow(true)
  }
  
  return (
    <nav className="navbar">
      <div className="nav-btn" onClick={toggleSidebar}><FaBars /></div>
      
      <div className="profile-btn" onClick={handleCLick}>
        <div className="nav-username">Hello {user.displayName}</div>
        <FaCaretDown className='dropdown'/>

        {
          show && <ProfileCard user={user} show={show}/>
        }
        
      </div>
    </nav>
  )
}
