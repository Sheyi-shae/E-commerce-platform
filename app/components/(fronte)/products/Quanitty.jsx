'use client'
import React, { useEffect, useState } from 'react'

export default function Quantity({price,qty,handleAddtocart}) {
    const [amount, setAmount]=useState(price);
    const [quantity, setQuantity]=useState(1)
    

   const Increment =()=>{
    setQuantity((prev)=>prev+1)
   }
   const Decrement =()=>{
    setQuantity((prev)=>(prev > 1 ? prev- 1 : 1))
   }
useEffect(() => {
    setAmount(quantity *  price )
 
}, [price, quantity])

  return (
    <div>
    
{/*     
    <div className='roboto-light text-slate-600'>Quantity</div>
    
    <div className='flex  '>
    <span className='ring-slate-200 ring-1  shadow-sm overflow-hidden rounded-sm'>
      <button onClick={Decrement} className='hover:bg-slate-50 text-slate-800 font-medium px-4 p-2'>-</button>
    </span>


    <span className='ring-slate-200 ring-1 text-slate-600 font-semibold roboto-light px-8
     p-2 shadow-sm overflow-hidden'>
     {quantity}
    </span>


    <span className='ring-slate-200 ring-1 shadow-sm overflow-hidden rounded-sm'>
      <button onClick={Increment} className='hover:bg-slate-50 text-slate-800 font-medium px-4 p-2'>+</button>
    </span>
    
    </div>
    <p className='text-xs text-slate-400 roboto-light'>You will pay &#x20A6;{amount}</p> */}

<div className='mt-3'>
    <button onClick={()=>handleAddtocart()} type="button" className="text-white bg-gradient-to-br from-yellow-600 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200
     dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-28 py-4 text-center me-2 mb-2">ADD TO CART</button>
    </div>
    </div>
  )
}
