import { ArrowUpFromLine, Edit, Import, Plus, Trash, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ColumnAction({name,link}) {
  return (
    <div>
        
    <div className='dark:bg-slate-700 bg-slate-100  shadow-md dark:shadow-none shadow-slate-300 
    '> 
    <div className='flex flex-col md:flex-row  md:justify-between p-3'>
         <div className=' flex justify-between flex-row'>
         <span className=''>
          {/* export */}
          
         </span>
         <span className='hidden md:block'>
          {/* export */}
          <button className="relative inline-flex items-center justify-center p-[0.05rem] mb-1 me-1 overflow-hidden text-sm font-medium
           text-gray-900 rounded-sm group bg-gradient-to-br from-orange-700 to-green-700 group-hover:from-lime-500
            group-hover:to-green-700 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800">
<span className="relative px-6 py-2.5 gap-1  flex flex-row transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
<Edit size={20} className='  '/> Change
</span>
</button>
         </span>

         
         
         </div>
         <div className=' flex justify-end'>
           {/* export */}
         
          {/* action buttons */}

          
          {/* export */}
          <Link href={link} > <button type="button" class="text-white flex bg-gradient-to-br from-green-800 to-lime-600 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 
          font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          <span><Plus size={18}/></span>
          {name}</button></Link>
        

          
        

         </div>
         </div>   
        </div>
    </div>
  )
}
