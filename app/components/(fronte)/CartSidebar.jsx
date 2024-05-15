'use client'
import { Trash2, Truck, XCircle } from 'lucide-react'
import React from 'react'
import CartCoupon from './CartCoupon'
import Image from 'next/image'

import { useDispatch, useSelector } from 'react-redux'

import { decrementQty, incrementQty, removeFromCart } from '@/redux/slices/cartslice'
import Link from 'next/link'
import { FormatCurrency } from './moneyinput'


export default function CartSidebar({state,setState}) {
  
  const cartItems= useSelector((store)=>store.cart) // cart is it name in the reducer
  const subTotal = cartItems.reduce((acc,currentItem)=>{
   return acc + (currentItem.Discountedprice * currentItem.qty) //acc is the accumulator
  },0)
const dispatch=useDispatch()

function handleRemoveFromCart(cartId){
  dispatch(removeFromCart(cartId))
}
function handleQtyIncrement(cartId){
  dispatch(incrementQty(cartId))
}
function handleQtyDecrement(cartId){
  dispatch(decrementQty(cartId))
}

  

  return (
   
   
    
       
     <div
    className={`p-1 transition-all duration-1000 ${
      state ? ' bg-white dark:bg-slate-700 shadow-lg fixed overflow-y-scroll  h-screen z-[24] top-0 right-0 w-[70%] md:w-[40%] lg:w-[30%]' : ' h-screen w-0'
    } overflow-hidden`}
  >

  <button onClick={()=>setState(false)} className='bg-slate-800 rounded-full p-0 shadow-lg'>
  <XCircle className='text-red-500'/></button>

{/* main content */}
<div className='p-2  flex flex-col gap-3'>
<CartCoupon/>
{/* delivery */}
<div className='bg-slate-100 py-2 w-full flex gap-2  rounded-sm shadow-sm dark:bg-slate-600'>
<span><Truck size={32} className='text-orange-500'/></span><span className='roboto-light font-medium text-sm leading-7'>
Free delivery within ilorin</span>
</div>

{/* dynamic cart item  */}

  {cartItems.length > 0 ? (
    <div className='flex w-full  roboto-light  py-0  text-slate-600 rounded-sm'>
    <div className='flex  flex-wrap gap-2'>
      {cartItems.map((item, i) => (
        <div key={i} className='flex gap-2  rounded-sm  shadow-sm dark:bg-slate-400'>
          <div className='w-2/6 relative'>
            <Image
              src={item.imageUrl}
              alt=''
              width={500}
              height={300}
              className='object-cover h-28 w-28 rounded-sm'
            />
          </div>
          <div className='flex flex-col  w-4/6 gap-1'>
            <div className='capitalize line-clamp-2 text-slate-600 open-sans text-xs md:text-sm'>{item.title}</div>
            <div className=' text-xs roboto-light text-slate-400'>{item.qty} X {FormatCurrency(item.Discountedprice) }</div>
            <div className='flex  mt-4'>
              <span className='ring-slate-200 dark:ring-slate-500   ring-1 shadow-sm  rounded-l-sm'>
                <button
                  onClick={() => handleQtyDecrement(item.id)}
                  className='hover:bg-slate-200 text-slate-800 px-2 py-1 dark:hover:bg-slate-500'
                >
                  -
                </button>
              </span>
              <span className='ring-slate-200 ring-1 dark:ring-slate-500  text-slate-600
               roboto-light px-6 p-1 overflow-hidden'>
                {item.qty}
              </span>
              <span className='ring-slate-200 ring-1 dark:ring-slate-500  shadow-sm rounded-r-sm'>
                <button
                  onClick={() => handleQtyIncrement(item.id)}
                  className='hover:bg-slate-2000 text-slate-800 px-2 py-1'
                >
                  +
                </button>
              </span>
            </div>
            </div>
            

            <div className='w-1/6 text-right'>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className='text-red-500 shadow-sm hover:text-red-600'
              >
                <Trash2  size={18}/>
              </button>
            </div>
         <hr/> </div> 
    
      ))}
    </div></div>
  ) : (
    <div className='flex gap-2 flex-wrap w-full justify-center'>
    <span>Your cart is </span><span className='text-red-600 dark:text-red-500'>empty</span>
    <span className='text-lime-400 dark:text-lime-300 text-xl'>start shopping!</span>
    </div>
  )}


{/* cart end */}


{/* checkout and order */}


</div>
 


<div className='absolute bottom-0 flex flex-col justify-center  gap-2  w-full'>
<div >
{subTotal}

</div>
<div className='gap-1  md:gap-3 justify-center flex'>

{state &&
<>
 <Link href={'/cart'} > <button onClick={()=>setState(false)} type="button" className="text-white flex bg-gradient-to-br from-teal-500 to-lime-700 
          hover:bg-gradient-to-bl text-xs  focus:ring-2 focus:outline-none gap-1 focus:ring-teal-200 dark:focus:ring-teal-800 
           rounded-lg md:text-sm md:px-9 px-7 py-2 md:py-2.5 text-center me-2 mb-2">
          
          MY CART</button></Link>
 
          <Link href={'/checkout'} > <button type="button" className="text-white flex bg-gradient-to-br from-pink-600 to-orange-500 
          hover:bg-gradient-to-bl text-xs focus:ring-2 gap-1 focus:outline-none focus:ring-orange-200 dark:focus:ring-pink-800 
        rounded-lg md:text-sm md:px-9 px-7 py-2 md:py-2.5 text-center me-2 mb-2">
          
         CHECKOUT </button></Link></>}
</div>
</div>

</div>



   
    
  )
}
