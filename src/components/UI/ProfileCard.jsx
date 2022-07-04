import React from 'react'
import '../../styles/components/profilecard.scss'
import {FaSignOutAlt, FaSmileWink} from "react-icons/fa";


export default function ProfileCard({user, show}) {
  // if(!show) {
  //   return null
  // }

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
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  )
}
