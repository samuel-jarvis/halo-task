import '../../styles/pages/dashboard.scss'
import { useState, useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../../components/UI/Navbar'
import Sidebar from '../../components/UI/Sidebar'


export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    showSidebar ? setShowSidebar(false) : setShowSidebar(true)
  }

  const hideSidebar = (e) => {
    // if (e.target.classList.contains('wrapper-overlay')) {
      setTimeout(() => {
        setShowSidebar(false)
      } , 300)  
    // }
  }


  return (
    <main className='main'>
      <Sidebar showSidebar={showSidebar} hideSidebar={hideSidebar}/>
      
      <div className="section">
        <Navbar toggleSidebar={toggleSidebar}  />
        
        <Outlet />
      </div>
      
    </main>
  )
}
