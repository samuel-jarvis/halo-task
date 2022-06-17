import '../styles/pages/landing.scss'
import hero from '../assets/hero.png'
import React from 'react'


export default function Landing() {
  return (
    <div>
      <nav className="nav px">
        <div className="logo">Halo-Task</div>
        <a href="https://www.google.com" className='btn--cta'>Sign In</a>
      </nav>

      <div className="hero px">
        <div className="hero__content">
          <h1 className="hero__title">A New Way to Track Tasks and take notes</h1>
          <p className="hero__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas possimus autem corporis a odit.
           </p>
          <a href="/" className='btn--main'>Sign Up</a>
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
