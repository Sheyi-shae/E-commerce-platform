"use client";

import { Blockquote } from "flowbite-react";
import Image from 'next/image'
import React from 'react'


export default function Testimonial() {
  return (
    <div className='flex flex-col ring-1 ring-slate-200 w-full bg-inherit '>
    
    <div className='uppercase bg-slate-300 p-2  text-black text-lg font-semibold items-center justify-center flex'>our Testimonial</div>
    <div className='flex flex-col h-[35vh] p-3 rounded-md' >
    <div className=' relative h-1/2 bg-inherit rounded-md'>
    {/* image div starts here */}
    <div className=' h-[100%] w-[50%] relative ml-20'>
     <Image src={'/mini_banners/electronis.jpg'} alt='' layout="fill" className='rounded-[100%] mt-7 ' objectFit="cover" />
     </div>
     {/* image ends here */}
    </div>
    <div className='  h-1/2 bg-slate-200 dark:bg-slate-400 rounded-md'>
    <div className='mt-8 flex flex-col justify-center items-center'>
       <h2 className='uppercase text-black text-lg font-bold'>seyi adeniyi</h2>
        <h3 className='capitalize text-yellow-500'>web developer</h3></div> 
        <div>
        <svg
        className="mb-4 h-8 w-8 mx-auto text-gray-400 dark:text-gray-700"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
        </div>
    </div>
        
        
    </div>
    <Blockquote className="text-sm">
    
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to
      complex dashboard. Perfect choice for your next SaaS application."
    </Blockquote>
    </div>
  )
}
