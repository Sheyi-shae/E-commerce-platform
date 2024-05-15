import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { User2 } from 'lucide'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { Settings, Settings2, User, Users, Users2 } from 'lucide-react'
  

export default function AccountDropdown() {
  return (
    <div>
        <DropdownMenu>
  <DropdownMenuTrigger><button><Settings/></button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel></DropdownMenuLabel>
    <DropdownMenuSeparator />
    
   
    <DropdownMenuItem><Settings2 className='pr-1'/>Profile</DropdownMenuItem>
    
    <DropdownMenuItem><span>Mode</span><span className='pl-1'><ThemeSwitcher size={16}/></span></DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}
