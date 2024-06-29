
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOps'
import SidebarContent from './SidebarContent'
  

export   function Sidebar({sideBar, setSideBar, }) {
    

    
  return (
    <div>
        <SidebarContent sideBar={sideBar} setSideBar={setSideBar}/>
    </div>
    
  )
}
