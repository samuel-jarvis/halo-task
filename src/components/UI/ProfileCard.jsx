import React from 'react'
import '../../styles/components/profilecard.scss'
import {FaSignOutAlt, FaSmileWink} from "react-icons/fa";
import {projectAuth} from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from "react-router-dom";




export default function ProfileCard({user, show}) {
  const {dispatch} = useAuthContext()
  const navigate = useNavigate();

  // if(!show) {
  //   return null
  // }

  const logout = async () => {
    try {
      console.log('first')
      await projectAuth.signOut()
      dispatch({type: 'LOGIN'})
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='profile-card'>
      <div className="card-wrapper">
        <div className="profile-details">
          {/* <img src="" alt="" /> */}
          <FaSmileWink className='profile__icon'/>
          <p className="profile-details__name">{user.displayName}</p>
          <p className="profile-details__email">{user.email}</p>
        </div>

        <div className='logout-link'>
          <FaSignOutAlt />
          <button className='button' onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}
