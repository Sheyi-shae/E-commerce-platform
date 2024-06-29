import React from 'react'
import CustomerOrders from './CustomerOrders'
import { getData } from '@/lib/getData'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOps'
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast'

export default async function page() {
  const order=await getData('order')
  const session = await getServerSession(authOptions);
        const userId = session?.user.id;
  
  
  const customerOrders=order?.filter((item)=>item.userId ===userId)
  
  if(!session){
    
    redirect('/login')
  }
  return (
    <div className='p-3 md:px-16 montserrat'>
      <h2 className='font-medium text-2xl md:text-3xl text-slate-700'>Order Details</h2>
      <p className='text-slate-600'>Check the status of recent and old orders & discover more products</p>
      <div className='space-y-4' >
      {customerOrders.length > 0 ?
      customerOrders.map((item)=>(
        <div className='space-y-4' key={item.id}>
         <CustomerOrders order={item} />
         </div>
      )) : (
        <p> You have not made any order</p>
      )}
      </div>
    </div>
  )
}
