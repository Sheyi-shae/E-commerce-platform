'use client'
import React from 'react'
import Banner from "../components/(fronte)/Banner";
import Cards from "../components/(fronte)/Cards";
import TrendingProducts from "../components/(fronte)/TrendingProducts";
import Testimonial from "../components/(fronte)/Testimonial";
import Newsletter from "../components/(fronte)/Newsletter";
import CountdownTimer from '../components/(fronte)/CountDown';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';



export default function MainHomepage() {
  const {data:session, status}=useSession()

  if(status==='loading'){
    return (
      <div class="cssload-preloader">
	<div class="cssload-preloader-box">	
    	<div>l</div>		
        <div>o</div>	
        	<div>a</div>	
            	<div>d</div>
                		<div>i</div>	
                        	<div>n</div>	
                            	<div>g</div>
                                </div>
</div>
    )
  }
  const deadline = new Date(2024, 9, 24, 12, 0); 

  return (
    <main className="flex min-h-screen montserrat  flex-col dark:bg-slate-900 items-center justify-between p-2">
   
    <Banner />
    <Cards />
    <div className="flex w-full flex-col  gap-5 px-1 md:px-20 justify-center -mt-32 md:-mt-12 md:flex-row ">
      {/* Trending Products */}
      <div className="w-full  md:w-[70%]  md:p-2">
        <TrendingProducts />
        
      </div>
      {/* Testimonial */}
      <div className="w-full flex flex-col gap-3  md:w-[30%]  ">
        <Testimonial/>
        
       
        <Newsletter/>
      </div>
      
    </div>
  
   <div className='mobile-background-image md:background-image w-full h-[20rem] md:h-[30rem] mt-5 '>
   <div className=' p-3 md:mt-12 md:p-8 gap-2 mt-3 w-full flex md:w-[60%] justify-start items-center flex-col'>
   <div className='text-2xl md:text-3xl text-center text-red-600'>GREAT DEAL</div>
  <div className='text-slate-50 text-3xl  px-2 md:p-0 md:text-6xl line-clamp-1 font-extrabold'>Computing Collection</div>
   <CountdownTimer deadline={deadline}/>
   <Link href={'/collections/computing'}><Button   className=" montserrat px-5  md:px-10"  gradientDuoTone="pinkToOrange">
          
          Shop Now</Button></Link>
   </div>
   </div>
   
   
  </main>
  )
}
