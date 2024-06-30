import FetchData from '@/lib/fetchData(client)'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'




import React, { useState } from 'react'

export default function CategoriesMenu() {
  const [categories, setCategories] = useState([]) // Initialize as an empty array
  return (
    <div className='flex z-[100] flex-col text-sm bg-white montserrat dark:bg-slate-700 w-[18vw] ml-6 shadow-md rounded-b-md'>
      <FetchData endpoint="categories" setState={setCategories} state={categories} />
      {categories?.map((category) => (
        <Link className='z-[100]' key={category.id} href={`collections/${category.slug}`}>
        
          <li className='z-[100] flex  justify-between shadow-sm text-sm text-slate-700 montserrat p-3 px-3 border-b-[1px]  border-yellow-50
           dark:text-slate-100 capitalize hover:bg-red-400 hover:text-slate-800 dark:hover:text-black '>
           <span className='z-[100]'>
           {category.title}</span><button className='z-[100]'><ChevronRight/></button></li>
        
        
        </Link>
      ))}

      

    </div>
  )
}
