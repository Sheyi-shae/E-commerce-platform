import Image from 'next/image';
import React from 'react';

export default function Cards() {
  const imageLinks=[
    {link:'/mini_banners/clothing.jpg'},{link:'/mini_banners/electronis.jpg'},{link:'/mini_banners/furniture.jpg'}

  ]
  return (
    <div className='w-[80%] p-0 h-[15vh]   md:w-[65vw] md:h-[30vh]  bg-white
     dark:bg-slate-600 rounded-sm dark:shadow-none shadow-slate-300 mb-48 mt-4 md:mb-24 md:-mt-16 shadow-md z-[2]'>
     <div className='flex   w-full h-full '>
     {imageLinks.map((img)=>(
       <div key={''} className='relative w-full  '>
          <Image src={img.link} alt=''  fill className='rounded-md object-cover px-1 hover:p-2 
          transition-all duration-1000 hover:rotate-2' />
        </div>))}
    
       
        </div>
      
    </div>
  );
}
