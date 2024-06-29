'use client'
import React, { useState } from 'react'

import Image from 'next/image';

import Link from 'next/link';


export default function WithStyles({product}) {
  
  
  
  const calculateAverageRating = (reviews) => {//takes in sll the reviews
    if (reviews.length === 0) return 0; 
    const totalRating = reviews.reduce((sum, review) => sum + review.ratings, 0);//reduce function extracts all the ratings
    //and sums it up
    return totalRating / reviews.length; 
  };
   
      
    

  return (
    <div className='space-x-0 p-2 px-1 md:px-8'><div key={product.id} className="relative group specialbg dark:bg-slate-300 
    ring-1 rounded-sm overflow-hidden h-[17rem] ring-slate-300">
    <Link href={`/product/${product.slug}`} title={product.title}>
     <div className='w-full relative z-0 h-[60%]  bg-white dark:bg-slate-500'>
<Image  src={product.imageUrl} className='object-cover transition-all duration-500 group-hover:scale-105' alt={product.title} fill  />
</div>
     
      <div className=" items-start  mt-4 space-x-4 ">
        <div>
          <h3 className="text-xs font-[500] roboto-light capitalize line-clamp-2 text-gray-800    md:text-sm">
            
              {product.title}
              <span className="absolute inset-0" aria-hidden="true"></span>
              
          </h3>
          <div className="flex items-center ">
          {[...Array(5)].map((star,index)=>{
   const ratingValue= index + 1;
   
   return(
    
    <div  key={index}>
    <label className='hover:cursor-pointer'>
    <input type='radio' className='hidden ' value={ratingValue} />
      <p className={`md:text-lg text-xs  ${ratingValue <= calculateAverageRating(product.reviews) ?
       "text-yellow-300 " : "text-slate-600 " }`}>&#9733;</p></label>
       
    </div> )
 })}
          </div>
        </div>
        <div className=" flex justify-end gap-2 mb-2 ">
        <p className="text-xs  flex line-through text-slate-700">&#x20A6; {product.Origninalprice}</p>
          <p className="text-sm  font-serif font-medium dark:text-yellow-600 text-yellow-600 flex  ">&#x20A6; {product.Discountedprice}</p>
          
        </div>
        
       
      </div>
      </Link>
     
        
      
    </div>
    
    </div>
  )
}
