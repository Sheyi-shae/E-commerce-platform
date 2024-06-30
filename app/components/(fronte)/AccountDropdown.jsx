'use client'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { ThemeSwitcher } from '../ThemeSwitcher'
import { UserCheck,User, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
  

export default function AccountDropdown({sessions}) {
  const router = useRouter()
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/login' })
    router.push('/')
    }
  async function handleLogOut(){
    await signOut()
    router.push('/')
    toast.success('You Are Logged Out')
    
  }
  return (
    <div>
        <DropdownMenu>
  <DropdownMenuTrigger><UserCheck size={28} className='text-slate-800  dark:text-pink-600'/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel className='capitalize line-clamp-1'>{sessions.user.firstName} {sessions.user.lastName}</DropdownMenuLabel>
    <DropdownMenuSeparator />
    
   
    <DropdownMenuItem><User className='pr-1'/>Profile</DropdownMenuItem>
    
    <DropdownMenuItem><ThemeSwitcher /></DropdownMenuItem>
    <DropdownMenuItem ><button onClick={handleLogOut} className="text-white  bg-gradient-to-br from-pink-600 to-red-600
    hover:bg-gradient-to-bl flex items-center justify-center rounded-md shadow-md dark:focus:ring-pink-800 
     text-sm  p-2 px-2  text-center me-2 mb-2"><LogOut className='pr-1'/>Logout</button></DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}
