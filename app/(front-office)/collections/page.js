import ProductExt from '@/app/components/(fronte)/products/ProductExt'
import { getData } from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function page() {
    const categories= await getData('categories')
  return (
    <div className='flex dark:bg-slate-800 dark:text-slate-50 gap-2 p-2'>
    {/* left sidebar  hidden on mobile */}
    <div className='hidden md:block md:w-[20%] shadow-md space-y-3 montserrat'>
    <div className='w-full relative h-full   '>
<Image  src={'/mini_banners/banner1.avif'} className='object-contain transition-all duration-500 group-hover:scale-105' alt={'speaker'} fill  />
</div>

<div className='w-full relative h-full   '>
<Image  src={'/mini_banners/banner3.avif'} className='object-contain transition-all duration-500 group-hover:scale-105' alt={'speaker'} fill  />
</div>
    </div>

{/* end side bar */}


    <div className='w-full md:w-[80%] shadow-md dark:bg-slate-800'>
    <div className='w-full shadow-md dark:shadow-none   dark:bg-slate-700 h-10 md:h-12 lg:h-14 specialbg flex justify-between mt-2 p-2 md:p-4 items-center'>
    <h2 className='capitalize montserrat text-center text-slate-800 dark:text-slate-50 p-2 text-2xl md:text-3xl'>{'Collections'}</h2>
</div>
    <div className="px-2 mx-auto max-w-7xl">
            <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-3 p-2 gap-6 mt-10 lg:mt-4 lg:gap-4 lg:grid-cols-4 xl:grid-cols-5">
              {categories.length > 0 ? (
                categories.map((category) => (
                   <div key={category.id} className="relative group specialbg dark:bg-slate-300 ring-1 rounded-sm overflow-hidden h-[12rem] ring-slate-300">
    <Link href={`/collections/${category.slug}`} title={category.title}>
     <div className='w-full relative z-0 h-[60%]  bg-white dark:bg-slate-500'>
<Image  src={category.imageURL} className='object-cover transition-all duration-500 group-hover:scale-105' alt={category.title} fill  />
</div>
     
      <div className="  mt-4 ">
          <h3 className="text-sm text-center montserrat capitalize line-clamp-2 text-gray-800 ">
            
              {category.title}
             
              
          </h3>
    
        
        
       
      </div>
      </Link>
     
     
      
    </div>
    

                ))
              ) : (
                <p>No collections found</p>
              )}
            </div>
          </div>
    </div>
    </div>
  )
}
