"use client"
import { ChevronDown, ChevronRight, LayoutDashboard, LogOut, ScrollText,
     ShoppingBasket, Slack, Store, User2, UserCog, UsersRound } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  

export default function Sidebar({sideBar, setSideBar}) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const [collaspse, setCollapse]= useState(false);
    const sideLinks=[
        {title:'customers',
        icon:<User2/>,
        url:'/dashboard/customers'
    
    },
    {title:'orders',
        icon:<ShoppingBasket/>,
        url:'/dashboard/orders'
    
    },
    {title:'our staff',
        icon:<UsersRound/>,
        url:'/dashboard/staff'
    
    },
    {title:'online store',
        icon:<Store/>,
        url:baseUrl
    
    },

    ]
    
    const collapseLinks=[
        {title:'categories',
        
        url:'/dashboard/categories'
    
    },
    {title:'coupon',
        
        url:'/dashboard/coupon'
    
    },
    {title:'products',
        
        url:'/dashboard/products'
    
    },
    {title:'store banners',
        
        url:'/dashboard/banners'
    
    },
]
    const pathname=usePathname();
    
  return (
    <div>
    <div className='fixed h-auto z-[1] '>
       
        <div className={` ${sideBar ? ' transition-all ease-in-out duration-1000 w-[29vw] md:w-[17vw] bg-white shadow-md shadow-slate-300 dark:shadow-none dark:bg-slate-800  md:block' : 'transition-all ease-in-out duration-1000 w-[29vw] md:w-[17vw] bg-white shadow-md shadow-slate-300 dark:shadow-none dark:bg-slate-800  md:block'}`}>
<div className=' text-black hidden md:blockdark:text-slate-200 text-2xl h-12'>LOGO HERE</div>


<div  className='  flex  py-12 text-xs md:text-sm md:py-7 capitalize 
 dark:text-slate-200 space-y-1 h-screen  flex-col '>
 
 
<Link onClick={()=>setSideBar(false)} href={'/dashboard'}><span className={pathname === '/dashboard' ? 'gap-2 flex flex-row border-l-4 border-lime-500 text-lime-500 bg-slate-100 shadow-sm shadow-black md:p-4 p-3 dark:bg-slate-900': 'gap-2 flex flex-row shadow-sm   p-3 md:p-4 dark:bg-slate-800'}>
<LayoutDashboard  /> Dashboard</span></Link>
<button> <span className={pathname === '/dashboard/categories'  ? 'gap-2 flex flex-row border-l-4 border-lime-500 text-lime-500 bg-slate-100 shadow-smshadow-black p-3 md:p-4 dark:bg-slate-900': 'gap-2 md:p-4 flex flex-row shadow-sm    p-3 dark:bg-slate-800'}><Slack/>
<Collapsible>
  <CollapsibleTrigger onClick={()=>setCollapse(!collaspse)}> <span className='flex flex-row   '> Catalogue

   {collaspse ? <ChevronDown className='ml-3'/> :<ChevronRight  className='md:ml-3'/>}  </span> </CollapsibleTrigger>
  <CollapsibleContent>
  <div className='flex flex-col dark:bg-slate-900 bg-slate-300 rounded-sm shadow-sm p-1 md:px-8 md:py-1  items-start justify-start' >
  {collapseLinks.map((clinks,i)=>{
    return (
        
  <ul key={i}>
        <Link onClick={()=>setSideBar(false)} href={clinks.url} className={pathname==clinks.url ? 'text-lime-500 border-b-2  border-lime-500' : 'dark:text-slate-50'}>{clinks.title}</Link></ul>
    )
  })}
   </div>
    
  </CollapsibleContent>
  
  
  
</Collapsible>

</span> </button>
{sideLinks.map((link,i)=>{
    const icon=link.icon
    return(
        <span onClick={()=>setSideBar(false)} key={i} className={pathname === link.url ? 'gap-2 flex flex-row border-l-4 border-lime-500 text-lime-500 bg-slate-100 shadow-smshadow-black p-3 md:p-4 dark:bg-slate-900': 'gap-2 flex flex-row   p-3 md:p4 dark:bg-slate-800'}>{icon}<Link href={link.url}> {link.title}</Link></span>
    )}
)}

<Link onClick={()=>setSideBar(false)} href={'/dashboard/settings'}><span className={pathname === '/dashboard/settings' ? 'gap-2 flex flex-row border-l-4 border-lime-500 text-lime-500 bg-slate-100 shadow-sm shadow-black md:p-4 p-3 dark:bg-slate-900': 'gap-2 flex flex-row   p-3 md:p-4 dark:bg-slate-800'}>
<UserCog /> Settings</span></Link>
<button  className="text-white  bg-gradient-to-br from-pink-600 to-red-600
    hover:bg-gradient-to-bl flex items-center justify-center rounded-md shadow-md focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 
    font-medium  text-sm  py-3  ml-3 text-center me-2 mb-2">Logout <LogOut/> </button>
</div>

</div>

    </div>
    {/* logout button */}
    
   </div>
  )
}
