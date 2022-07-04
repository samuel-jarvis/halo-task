import '../../styles/components/sidebar.scss'
import { Link } from 'react-router-dom'
import { FaRegStar, FaRegBell, FaRegClock, FaCheck, FaTasks, FaRegStickyNote} from "react-icons/fa";

export default function Sidebar({showSidebar, hideSidebar}) {
  return (
    <div className={`wrapper-overlay ${showSidebar ? 'showSidebar': ''}` } onClick={hideSidebar} >

      <div className={`sidebar `}>
        <div className="content">
        <h2 className='logo'>Halo Task</h2>

        <ul className='sidebar-list'>
          <li className='sidebar-links head-link'>
            <FaTasks/><Link to='/dashboard'>Tasks</Link>
          </li>

          <li className='sidebar-links sub-link'>
            <FaRegBell /> <Link to='todaytask'>Important</Link>
          </li>

          <li className='sidebar-links sub-link'>
            <FaRegClock /> <Link to='pendingtask'>Pending</Link>
          </li>

          <li className='sidebar-links sub-link'>
            <FaCheck/><Link to='completedtask'>Completed</Link>
          </li>

          <li className='sidebar-links head-link'>
          <FaRegStickyNote/> <Link to='notelist'>Notes</Link>
          </li>

          <li className='sidebar-links sub-link'>
            <FaRegStar /> <Link to='importantnotes'>Starred Notes</Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
    
  )
}
