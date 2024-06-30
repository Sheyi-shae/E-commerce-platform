'use client'
import { decrementQty, incrementQty } from '@/redux/slices/cartslice';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast'
export default function Quantity({price,handleAddtocart,id,showQuantity,
  setShowQuantity}) {
    const [amount, setAmount]=useState(price);
    const cartItems= useSelector((store)=>store.cart)
    // Find the current product in the cart
  const currentProduct = cartItems?.find(item => item.id === id); 

    
const dispatch=useDispatch()

function handleQtyIncrement(cartId){
  toast.success('Product Quantity Increased')
  dispatch(incrementQty(cartId))
  
}
function handleQtyDecrement(cartId){
  toast.success('Product Quantity Decreased')
  dispatch(decrementQty(cartId))

}
useEffect(() => {
  
    setAmount(currentProduct?.qty * price);

}, [currentProduct, price]);

  return (
    <div>
    
    
    {showQuantity && 
    <div>
    <div className='roboto-light text-slate-600 dark:text-slate-50'>Quantity</div>
    
    <div className='flex  '>
    <div className=''>
      <Button gradientDuoTone="pinkToOrange" type="button" onClick={() => handleQtyDecrement(id)} >-</Button>
    </div>


    <div className='ring-slate-100 ring-1 dark:ring-slate-600 dark:text-slate-50 text-slate-600 font-semibold  px-8
     p-2 shadow-sm overflow-hidden'>
    {currentProduct ? currentProduct?.qty : 0}
    </div>


    <div className=' '>
      <Button gradientDuoTone="pinkToOrange" onClick={() => handleQtyIncrement(id)} type="button" className=' '>+</Button>
    </div>
    
    </div>
    <p className='text-xs text-slate-400 '>You will pay &#x20A6;{amount}</p>
    </div>
    }

    <div className='mt-3'>
    <Button gradientDuoTone="pinkToOrange" onClick={()=>handleAddtocart()} type="button"
     className="text-white  focus:outline-none montserrat text-sm md:font-normal
       rounded-lg  px-24 py-2 whitespace-nowrap">ADD TO CART</Button>
    </div>
    

    </div>
  )
}
