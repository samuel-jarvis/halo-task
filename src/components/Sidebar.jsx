import '../styles/components/sidebar.scss'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="content">
      <h2 className='logo'>Halo Task</h2>

      <ul className='sidebar-list'>
        <li className='sidebar-links'>
          <Link to='/dashboard'>Tasks</Link>
        </li>

        <li className='sidebar-links'>
          <Link to='notelist'>Notes</Link>
        </li>
      </ul>
      </div>
    </div>
  )
}
