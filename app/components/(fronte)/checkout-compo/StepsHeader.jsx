'use client'
import { ChevronRight, Home, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { FormatCurrency } from '../moneyinput'

export default function StepsHeader({steps,currentStep}) {
    const cartItems= useSelector((store)=>store.cart)
    const subTotal = cartItems.reduce((acc,currentItem)=>{
        return acc + (currentItem.Discountedprice * currentItem.qty) //acc is the accumulator for adding total items price
       },0)
       const amountPaid = useSelector((state) => state.coupon.amountPaid);
 
  return (
    <div className='montserrat text-xs md:text-sm'>
    <div className='flex gap-2 text-slate-700 mx-auto p-3 px-4 '>
          <Link href={''} className='flex font-bold gap-2 '>
           Cart <span className='bg-slate-600 text-slate-50 text-xs md:text-sm rounded-full w-5 h-5 text-center'>{cartItems.length}</span> <ChevronRight size={20}/></Link>
            {steps.map((step,i)=>(
                <Link href={''} className={`capitalize flex ${currentStep===step.number ? ' lato text-lime-600' :''}`} key={i}>{step.title}{step.icon}</Link>
            ))}
        
    </div>
    
    <div className='rounded-sm flex justify-between text-slate-700 w-[90%]  px-3 bg-slate-100 mx-auto shadow-sm'>
    <div className='flex p-2'> <div className='bg-slate-200 p-2 rounded-full'><ShoppingBag/></div>
    <div className='p-2'> You have {cartItems.length} item(s) in the cart. {amountPaid ? 'You applied a coupon code,total amount is' : 'Total amount is'} <span className='font-semibold ml-2'>{amountPaid ? FormatCurrency(amountPaid) : FormatCurrency(subTotal) }</span>
     </div>
   
     </div>


<div className='py-3'><Link href='/cart'><button className='p-1 hover:bg-slate-300 rounded-sm whitespace-nowrap shadow-sm text-slate-700 ring-1 ring-slate-400'>Edit cart</button></Link></div> 
</div>
    </div>
   
  )
}
