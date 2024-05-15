import Quantity from '@/app/components/(fronte)/products/Quanitty'
import { getData } from '@/lib/getData'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default async function ProductDetails({params:{id}}) {
    const product= await getData(`products/${id}`)
  return (
    <div className='flex md:flex-row flex-col gap-4 md:gap-7 px-16 md:px-36  py-8  w-full  '>
    {/* product image */}
        <div className='relative w-full h-[60vh] md:w-1/2  ring-slate-200 ring-1 '>
        <Image src={product.imageUrl} fill alt=''  className='object-cover  '/>
        </div>
        <div className='w-full md:w-1/2'>
        <h3 className='roboto-light font-semibold  md:text-2xl text-slate-700'>{product.title}</h3>
        
       
       <p className=" font-serif font-semibold dark:text-yellow-600 text-yellow-500 text-lg md:text-2xl ">&#x20A6; {product.price}</p>
       
      <div className='flex p-3'><Heart/> Add to wishlist</div>

       <div className='p-3'><Quantity price={product.price}/></div>

       
        </div>
    </div>
  )
}
