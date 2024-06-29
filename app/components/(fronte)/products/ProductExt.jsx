'use client'
import React, { useState } from 'react'

import Image from 'next/image';
import { ShoppingBasket } from 'lucide-react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addToCart } from '@/redux/slices/cartslice';
import { Button } from 'flowbite-react';

export default function ProductExt({product}) {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };
  
  
  const calculateAverageRating = (reviews) => {//takes in sll the reviews
    if (reviews?.length === 0) return 0; 
    const totalRating = reviews?.reduce((sum, review) => sum + review?.ratings, 0);//reduce function extracts all the ratings
    //and sums it up
    return totalRating / reviews?.length; 
  };
    const dispatch=useDispatch() //for triggering or calling
    const handleAddtocart= ()=>{
      dispatch(addToCart(product)) //product must be in object form{mapped from an array}
      toast.success("Item added to cart")
      // setSideCart(true)

      
    
    }
  return (
    <div><div key={product.id} className="relative group specialbg dark:bg-slate-300 ring-1 rounded-sm overflow-hidden h-[17rem] ring-slate-300"
    onMouseEnter={() => handleMouseEnter(product.id)}
      onMouseLeave={handleMouseLeave}
    >
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
          <p className="text-sm  font-serif font-medium dark:text-pink-600 text-pink-600 flex  ">&#x20A6; {product.Discountedprice}</p>
          
        </div>
        
       
      </div>
      </Link>
     
        <div className={`absolute bottom-0 w-full px-4 py-2 text-center
         text-white transition duration-700 ease-in-out transform opacity-0 ${hoveredProduct === product.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full'}`}>    
          <Button onClick={()=>handleAddtocart()} gradientDuoTone="greenToBlue" type='button' className=" text-white font-bold mx-auto py-1 px-1 rounded">
           <ShoppingBasket/>

          </Button>
        </div>
      
    </div>
    
    </div>
  )
}
