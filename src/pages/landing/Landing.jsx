import '../../styles/pages/landing.scss'
import hero from '../../assets/hero.png'
import React from 'react'
import {Link} from 'react-router-dom'

import { useAuthContext } from '../../hooks/useAuthContext'


export default function Landing() {
  const {user} = useAuthContext()
  console.log(user)

  return (
    <div>
      <nav className="nav px">
        <div className="logo">Halo-Task</div>

        {!user && (
          <Link className='btn--cta' to='/login'>Login</Link>
        )}

        {user && (
          <>
            <p className='username'>Hello {user.displayName}</p>
            <Link className='btn--cta' to='/dashboard'>Dashboard</Link>
          </>
        )}

      </nav>

      <div className="hero px">
        <div className="hero__content">
          <h1 className="hero__title">A New Way to Track Tasks and take notes</h1>
          <p className="hero__subtitle">
            Halo_Task is a simple task tracking app that allows you to track your tasks and notes. 
           </p>
          <Link to='/signup' className='btn--main'>Get Started</Link>
        </div>

        <div className="hero__image">
          <img src={hero} alt=""/>
        </div>
      </div>  

      <footer className="footer px">
        <p>
          Created with <span className="heart">&hearts;</span> by <a href="https://github.com/samuel-jarvis" className="footer__link">Samuel Jarvis Adeyemi</a>
        </p>
      </footer>

    </div>
  )
}
