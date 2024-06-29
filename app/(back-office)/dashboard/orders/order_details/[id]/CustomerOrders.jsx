'use client'
import { FormatCurrency } from '@/app/components/(fronte)/moneyinput'
import formatDate from '@/lib/dateFormat'
import { Circle, Timer} from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { StatusModal } from '../../StatusModal'



export default function CustomerOrders({order}) {
  const logo='SE'
  const transactionId=logo+'-'+order.id

  return (
    <div className='flex flex-col montserrat sm:flex-col ring-1  ring-slate-200 md:flex-row  w-full shadow-sm rounded-sm'>
    
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
        <div className=' w-full sm:w-full md:w-2/3'>
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
       
        
        <div className='pl-4 mb-3 md:mb-7 flex gap-3'>
        <button  type="button"
            className="text-white bg-gradient-to-br from-slate-700 to-black 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-slate-600 dark:focus:ring-slate-800 
           rounded-lg text-xs px-2 py-2 text-center me-2 mb-2">  View Invoice</button>
        <StatusModal status={order.status} id={order.id}/>
          </div>
        </div>
         
    </div>
  )
}
