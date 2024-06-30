'use client'
import React, { useState } from 'react'
import { Carousel } from "flowbite-react";
import Hero from './Hero';

import FetchData from '@/lib/fetchData(client)';


export default function Banner() {
  const [banners, setBanners]=useState([])
  return (
    <>
    
    <div className='w-full lg:hidden h-[20vh] md:h-[30vh]  lg:mt-0 bg-slate-50 dark:bg-slate-800 '>
  
<FetchData state={banners} setState={setBanners} endpoint={'banners'}/>
      <Carousel pauseOnHover>
      {banners?.map((item)=>(
         <img key={item.id} src={item.imageURL} alt={item.title} />
      ))}
     
      
      </Carousel>
      

    </div>
    <div className='w-full h-[50vh] z-0  hidden lg:block  md:h-[70vh]  lg:mt-0 bg-slate-50 dark:bg-slate-800 '>
    <Hero/>

      

    </div>
    
    </>
  )
}
