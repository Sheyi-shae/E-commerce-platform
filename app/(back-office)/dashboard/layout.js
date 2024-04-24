'use client'
import Sidebar from '@/app/components/(backe)/Sidebar'
import DropdownUser from '@/app/components/(backe)/dropdownUser'
import { ThemeSwitcher } from '@/app/components/ThemeSwitcher'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { Bell, Menu, Moon, Sun, User, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Layout({children}) {
const [sideBar, setSideBar]= useState(false);
  
  return (
    <div className='flex w-[98.9vw]  overflow-hidden sm:overflow-hidden  '>
    {/* for small screen */}
<div className={`sidebar  md:hidden ${sideBar ? 'open' : ''}`}><Sidebar sideBar={sideBar} setSideBar={setSideBar}/></div>

{/* for large screen */}
<div className= 'hidden md:block'><Sidebar sideBar={sideBar} setSideBar={setSideBar}/></div> 
{/* navbar */}
<div className='w-screen lg:ml-[17.2%]  '>

<div className='w-[97vw] md:w-[83vw] rounded-xs fixed z-20  ml-1 bg-white shadow-sm  shadow-slate-300 dark:shadow-none dark:bg-slate-800 h-12  '>
<div className='flex justify-between py-2 mr-5'>
<button onClick={()=>setSideBar(!sideBar)} className='text-lime-500 sm:block  md:hidden flex justify-center items-center ml-2'>{sideBar ? <X /> :<Menu/>}</button>



<div className='flex space-x-2 md:ml-[85%] lg:ml-[90%]'>

                 <ThemeSwitcher className={'text-lime-600'}/>
              
  <button className='text-lime-400 relative inline-flex items-center p-1 text-sm font-medium text-center'><Bell />
  
<span className="sr-only">Notifications</span>
  <div className="absolute inline-flex items-center justify-center
   w-5 h-5 text-xs font-bold text-white bg-red-400 
   rounded-full -top-2 end-3 dark:border-gray-900">7</div>
</button>

  
  <DropdownUser/>
</div></div>

</div>
<div></div>
<div className= ' bg-slate-50  dark:bg-black w-[98.5%] ml-1 md:w-[82vw] mt-12 min-h-screen'>
<hr/> 
{/* Main Content */}
{children }

</div>

</div>

    </div>
  )
}
