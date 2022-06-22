import '../../styles/pages/dashboard.scss'

import {Outlet} from 'react-router-dom'
import Navbar from '../../components/UI/Navbar'
import Sidebar from '../../components/UI/Sidebar'


export default function Dashboard() {
  return (
    <main className='main'>
      <Sidebar />
      
      <div className="section">
        <Navbar />
        
        <Outlet />
      </div>
      
    </main>
  )
}
