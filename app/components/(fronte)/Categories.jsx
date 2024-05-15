import FetchData from '@/lib/fetchData(client)'
import { ChevronRight } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


import React, { useState } from 'react'

export default function CategoriesMenu() {
  const [categories, setCategories] = useState([]) // Initialize as an empty array
  return (
    <div className='flex z-40 flex-col  bg-white dark:bg-slate-700 border w-[14vw] ml-6 shadow-sm rounded-b-md'>
      <FetchData endpoint="categories" setState={setCategories} state={categories} />
      {categories.map((category) => (
        <ul key={category.id}>
          <li className=' flex  justify-between shadow-sm text-[1rem] font-serif p-3 px-3 border-b-[1px]  border-yellow-50
           dark:text-slate-100 capitalize hover:bg-yellow-600 dark:hover:text-black hover:text-white'><span>
           {category.title}</span><button><ChevronRight/></button></li>
        
        </ul>
      ))}

      

    </div>
  )
}
