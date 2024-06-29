'use client'
import { columns } from '@/app/(back-office)/dashboard/orders/columns'
import { OrderTable } from '@/components/dataTable/order-table'
import FetchData from '@/lib/fetchData(client)'
import React, { useState } from 'react'

export default  function RecentOrders() {
  const [orders,setOrders]=useState([])
 
  return (
    <div className='dark:bg-slate-700 bg-slate-100 shadow-md dark:shadow-none shadow-slate-300 p-2 '>
    <h2 className='capitalize text-center font-normal dark:text-white ring-0 ring-slate-400 shadow-md
     shadow-black p-0'>recent orders</h2>
      <FetchData state={orders} setState={setOrders} endpoint={'order'}/>
      <OrderTable columns={columns} data={orders} name='orders SE-'/>
     </div>
  )
}
