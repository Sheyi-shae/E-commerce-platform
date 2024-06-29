'use client'
import { FormatCurrency } from '@/app/components/(fronte)/moneyinput'
import formatDate from '@/lib/dateFormat'
import { Circle, Timer} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { Button } from 'flowbite-react'
import RecieptModal from './RecieptModal'



export default function CustomerOrders({order}) {
  const logo='SE'
  const transactionId=logo+'-'+order.id

  return (
    <div className='flex flex-col montserrat gap-3 space-y-4 sm:flex-col ring-1  ring-slate-200 md:flex-row  w-full shadow-sm rounded-sm'>
    
        {/* left side */}
        <div className='specialbg sm:w-full w-full md:w-1/3 p-3 '>
        {/* content inside */}
        <div className='flex flex-row gap-10 sm:justify-center md:gap-3 md:flex-col flex-wrap'>
          <div>
          <h3 className='font-bold text-slate-800'>Order ID</h3>
      <p className='text-slate-700 text-sm'>{transactionId} </p>
       
          </div>
          <div>
          <h3 className='font-bold text-slate-800'>Date</h3>
      <p className='text-slate-700 text-sm'>{formatDate (new Date(order.createdAt))} </p>
       
          </div>
          <div>
          <h3 className='font-bold text-slate-800'>Total Price</h3>
      <p className='text-slate-700 text-sm'>{FormatCurrency(order.totalPrice)} </p>
       
          </div>
          <div >
          <h3 className='font-bold text-slate-800 montserrat'>Amount Paid</h3>
      <p className='text-slate-700 text-sm'>{order.amountPaid !=='' ?FormatCurrency(order.amountPaid) : FormatCurrency(order.totalPrice)} </p>
       {order.amountPaid !=='' && <p className='text-xs text-slate-600'>customer applied a coupon</p>}
          </div>
          <div>
          <h3 className='font-bold text-slate-800'>Order Status</h3>
      <span className='text-slate-700 flex text-sm'>
      {order.status === 'PROCESSING'&& <Timer size={18} fill='yellow' />}
      {order.status === 'SUCCESS'&& <Circle size={18} fill='green' />}
      {order.status === 'FAILED'&& <Circle size={18} fill='red' />}
      <p>{order.status}</p> </span>
       
          </div>
          <div>
          <h3 className='font-bold text-slate-800'>Delivery Address</h3>
      <p className='text-slate-700 text-sm'>{order.address} </p>
       
          </div>

</div>
{/* content ends here */}
        </div>
        {/* left side ends */}
        <div className=' w-full sm:w-full md:w-2/3 shadow-sm'>
        {/* product list */}
        {order.product?.map((product)=>(
           <div key={product.id} className='flex w-full gap-2 p-2'>
        <div className='ring-1 ring-slate-200 w-28 h-28'>
        <Image
              src={product.imageUrl}
              alt=''
              width={500}
              height={300}
              className='object-cover h-28 w-28  rounded-sm'
            />
        </div>
        
        <div className='flex flex-col w-full'>
        <div className='flex flex-col md:flex-row md:justify-between  w-full'>
        <div className='font-semibold text-slate-800 text-sm'>{product.title}</div>
        <div className='flex md:justify-end text-slate-700 text-sm'>{FormatCurrency(product.Discountedprice)}</div>
        </div>
        <p className=' text-slate-700 text-sm'>Quantity: {product.qty}</p>
        <button outline className='flex py-8 justify-center text-slate-800 text-sm' >View Product</button>
        </div>
        
        

        </div>
        ))}
       
        
        <div className=' flex pl-4 bottom-0 gap-2'>
        {order.status === 'SUCCESS' ? (
     <RecieptModal order={order}/>
        ):(
          <Button gradientDuoTone="pinkToOrange" disabled outline>View Invoice</Button>

        )}
       
          </div>
        </div>
         
    </div>
  )
}
