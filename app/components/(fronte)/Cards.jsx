'use client'
import FetchData from '@/lib/fetchData(client)';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Cards() {
 const [categories, setCategories]=useState([])

  return (
    <div className=' p-0 h-auto   md:w-[70vw] sm:w-full w-full  bg-white
     dark:bg-slate-600 rounded-sm dark:shadow-none shadow-slate-300 mb-48 mt-4 md:mb-24 md:-mt-16 shadow-md z-[2]'>
     <div className='p-2 w-full specialbg shadow-md'>
      <p className='montserrat flex justify-center font-semibold'>Shop by Categories</p>
     </div>
     <div className='mx-auto'>
          <FetchData endpoint="categories" setState={setCategories} state={categories} /></div>
     <div className="px-2 mx-auto  max-w-7xl">
          
          <div className="grid sm:grid-cols-4 p-2 grid-cols-3 md:grid-cols-3 gap-6 mt-2 lg:mt-2 lg:gap-4 lg:grid-cols-5 xl:grid-cols-6">
          
          {categories.length > 0 && (
              categories.map((category) => (
                <Link key={category.id} href={`collections/${category.slug}`}>
                <div  className="relative group ring-1 w-[6rem]
                rounded-full overflow-hidden h-[6rem] md:h-[9rem] md:w-[9rem] lg:h-[8rem] lg:w-[8rem]
                
                 ring-slate-200 ">

<div className='w-full relative z-0 h-[80%] '>
<Image  src={category.imageURL} className='object-cover transition-all duration-500 group-hover:scale-105' alt={category.title} fill  />
</div>


                </div> 
                <p className='flex justify-center  mt-1 mr-3 md:mt-0 md:mr-0 text-center line-clamp-1 dark:text-black montserrat 
                text-xs md:text-sm text-slate-600 '>{category.title}</p>
                
                </Link>
               
               
              )))}


      </div></div>
    </div>
  );
}
