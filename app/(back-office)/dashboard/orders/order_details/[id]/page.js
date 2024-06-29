'use client'
import React, { useState } from 'react'
import CustomerOrders from './CustomerOrders'
import FetchData from '@/lib/fetchData(client)'
import { Undo2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import PagePreloader from '@/app/components/(fronte)/Preloader'




export default function AllOrders({params:{id}}) {
  const [order,setOrder]=useState([])
  const router =useRouter()
        
  
  
  return (
    <div>
     {/* page header */}
     <div className=' dark:text-white  font-medium flex justify-between p-4 bg-white dark:bg-slate-800  rounded-sm shadow-sm'>
<span><h2 >Go Back</h2></span>
<button onClick={()=>router.back()}><Undo2/></button>

    </div>
    <div className='p-3 md:px-16 montserrat'>
    
      <h2 className='font-medium text-2xl md:text-3xl text-slate-700'>Order Details</h2>
      <p className='text-slate-600'>Check the status of recent this order </p>
      <FetchData endpoint={`order/${id}`} state={order} setState={setOrder} />
     
        <CustomerOrders order={order} />
      
         
      
      
    </div>
    </div>
  )
}