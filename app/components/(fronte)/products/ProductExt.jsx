'use client'
import React from 'react'
import StarRating from '../StarRating';
import FetchData from '@/lib/fetchData(client)';
import Image from 'next/image';
import { ShoppingBasket } from 'lucide-react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addToCart } from '@/redux/slices/cartslice';

export default function ProductExt({product,handleMouseEnter,handleMouseLeave,hoveredProduct}) {
    
    const dispatch=useDispatch() //for triggering or calling
    const handleAddtocart= ()=>{
      dispatch(addToCart(product)) //product must be in object form{mapped from an array}
      toast.success("Item added to cart")
      // setSideCart(true)
    
    }
  return (
    <div><div key={product.id} className="relative group bg-slate-200 dark:bg-slate-400 ring-1 rounded-sm overflow-hidden h-[17rem] ring-slate-300"
    onMouseEnter={() => handleMouseEnter(product.id)}
      onMouseLeave={handleMouseLeave}
    >
    <Link href={`/product/${product.slug}`} title={product.title}>
     <div className='w-full relative z-0 h-[60%]  bg-white dark:bg-slate-500'>
<Image src={product.imageUrl} className='object-cover transition-all duration-500 group-hover:scale-105' alt={product.title} fill  />
</div>
     
      <div className=" items-start  mt-4 space-x-4 ">
        <div>
          <h3 className="text-xs font-[500] roboto-light capitalize line-clamp-2 text-gray-800    md:text-sm">
            
              {product.title}
              <span className="absolute inset-0" aria-hidden="true"></span>
            
          </h3>
          <div className="flex items-center ">
            <StarRating />
          </div>
        </div>
        <div className=" flex justify-end gap-2  ">
        <p className="text-xs  flex line-through text-slate-700">&#x20A6; {product.Origninalprice}</p>
          <p className="text-sm  font-serif font-medium dark:text-yellow-600 text-yellow-600 flex  ">&#x20A6; {product.Discountedprice}</p>
          
        </div>
      </div>
      </Link>
     
        <div className={`absolute bottom-0 w-full px-4 py-2 text-center
         text-white transition duration-700 ease-in-out transform opacity-0 ${hoveredProduct === product.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full'}`}>    
          <button onClick={()=>handleAddtocart()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <ShoppingBasket/>
        
          </button>
        </div>
      
    </div>
    </div>
  )
}
