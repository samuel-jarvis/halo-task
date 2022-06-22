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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus autem corporis a odit.
           </p>
          <Link to='/signup' className='btn--main'>Get Started</Link>
        </div>

        <div className="hero__image">
          <img src={hero} alt=""/>
        </div>
      </div>  

      <footer className="footer px">
        Created with <span className="heart">&hearts;</span> by <a href="/" className="footer__link">Samuel Jarvis Adeyemi</a>
      </footer>

    </div>
  )
}
