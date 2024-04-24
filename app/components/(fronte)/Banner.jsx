'use client'
import React from 'react'
import { Carousel } from "flowbite-react";

export default function Banner() {
  return (
    <div className='w-full h-[55vh]  md:h-[70vh]  lg:mt-0  dark:bg-slate-800 '>

<Carousel pauseOnHover>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>

    </div>
  )
}
