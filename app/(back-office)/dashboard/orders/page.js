'use client'
import React, { useState } from 'react'
import { columns } from './columns'
import FetchData from '@/lib/fetchData(client)'
import { OrderTable } from '@/components/dataTable/order-table'

export default function Orders() {
  const [orders,setOrders]=useState([])
  return (
    <div>
       <div className='p-3 space-y-2 '>
    <h2 className=' dark:text-white  font-medium text-2xl '>Customer Orders</h2>
    {/* page functions 1 */}
  
<FetchData state={orders} setState={setOrders} endpoint={'order'}/>
<OrderTable columns={columns} data={orders} name='orders SE-'/>
    </div>
    </div>
  )
}
