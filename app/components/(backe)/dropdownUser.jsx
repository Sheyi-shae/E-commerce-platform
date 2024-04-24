import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { LayoutGrid, LogOut, Settings2, User,  Users } from 'lucide-react'
import Image from 'next/image'
  
export default function DropdownUser() {
  return (
    <div>
        <DropdownMenu>
  <DropdownMenuTrigger>
  <div>
    <button className='flex items-center justify-center'><Image src={'/passport.jpg'} width={20} height={20} alt='profile' className=' rounded-full w-7 h-7'/></button>
 </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><Settings2 className='pr-1'/> Profile settings</DropdownMenuItem>
    <DropdownMenuItem><LayoutGrid className='pr-1'/> Dashboard</DropdownMenuItem>
    <DropdownMenuItem><Users className='pr-1'/> Team</DropdownMenuItem>
    <DropdownMenuItem><LogOut className='pr-1'/> Logout</DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}
