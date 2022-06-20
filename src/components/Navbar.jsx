import '../styles/components/navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-username">Hello Jarvis</div>
      <nav>Profile</nav>
    </nav>
  )
}
