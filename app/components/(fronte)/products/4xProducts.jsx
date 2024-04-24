'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import FetchData from '@/lib/fetchData(client)'
import StarRating from '../StarRating'
import Product from './TestProduct'

export default function Product4x() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const [product,setProduct]=useState([])
  return (
    <div className='flex z-0  p-1 flex-wrap ' >
    <FetchData endpoint="products" setState={setProduct} state={product} />
      {product.map((item, index) => (
        <div key={index} className={`w-full md:w-1/4 lg:w-1/5 xl:w-1/5 h-[17rem] ring-1 ring-white dark:ring-slate-200
         bg-slate-100 dark:bg-slate-400 rounded-sm p-0 m-4 overflow-hidden
          ` }
         
         >
          <div className='w-full relative z-0 h-[60%] bg-white dark:bg-slate-500'>
            <Image src={item.imageUrl} className='z-0 object-cover hover:p-1' alt={item.title} fill  />
          </div>
          {/* Star rating component */}
          <div className='w-full relative h-[10%] bg-white dark:bg-slate-100'>
            {/* Your star rating component goes here */}
            <p className='text-yellow-300 text-sm '><StarRating/></p>
          </div>
          <div className='flex flex-col justify-center'>
            <p className='flex  justify-center capitalize  text-slate-900'>{item.title}</p>
            <p className='font-normal text-center font-serif dark:text-yellow-600 text-yellow-700'>&#x20A6; {item.price}</p>
          
          
          
          </div>

          {/* mouse hover effect */}
          {isHovered && <div>
            <button>hiii</button>
          </div>}
        
        </div>
        
      ))}

      
    </div>
  )
}
