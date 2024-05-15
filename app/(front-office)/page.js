"use client"
import Banner from "../components/(fronte)/Banner";
import Cards from "../components/(fronte)/Cards";
import TrendingProducts from "../components/(fronte)/TrendingProducts";

import Testimonial from "../components/(fronte)/Testimonial";
import Newsletter from "../components/(fronte)/Newsletter";
import Image from "next/image";

import { useState } from "react";

export default function Home() {
  
  return (
    <main className="flex min-h-screen  flex-col dark:bg-slate-800 items-center justify-between p-2">
   
      <Banner />
      <Cards />
      <div className="flex w-full flex-col gap-5 px-1 md:px-20 justify-center -mt-32 md:-mt-12 md:flex-row ">
        {/* Trending Products */}
        <div className="w-full md:w-[70%] p-1 md:p-2">
          <TrendingProducts />
          <div className="flex justify-center items-center py-4">
          <div className='mt-3'>
    <button type="button" className="text-white bg-gradient-to-br from-yellow-600 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200
     dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-9 py-4 text-center me-2 mb-2">VIEW ALL</button>
    </div>
          </div>
        </div>
        {/* Testimonial */}
        <div className="w-full md:w-[30%]  p-5">
          <Testimonial/>
          <br/>
          <Newsletter/>
        </div>
        {/* End of Testimonial */}
      </div>
      
      {/* mini flashy banner */}
      <div className="flex  w-full  px-20">
      <div className="ring-black m-2 ring-1 w-1/4 h-full">
      <Image src={'/mini_banners/banner1.avif'}  width={900} height={1} 
        className='rounded-md object-cover w-full px-1 hover:p-1' alt=""/>
      </div>
      <div className=" w-3/4 h-full">
      <div className="h-[50%] w-full  flex ">
        <span  className="p-1 w-2/3"><Image src={'/mini_banners/banner2.webp'} width={730} height={200} 
        className='rounded-md object-cover px-1 hover:p-1 ' alt=""/></span>
        <span className="p-1 w-1/3 "><Image src={'/mini_banners/banner3.avif'}  width={500} height={300} 
        className='rounded-md object-cover px-1 hover:p-1' alt=""/></span>
      </div>
      <div className="h-1/2  ">
      <Image src={'/mini_banners/banner5.webp'}  width={900} height={1} 
        className='rounded-md object-cover w-full px-1 hover:p-1' alt=""/>
      </div>
      </div>


      </div>

      {/* end omini flashy banner */}
    </main>
  );
}
