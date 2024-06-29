"use client"

import { DataTable } from '@/components/dataTable/data-table';

import React, { useState } from 'react'
import { columns } from './columns';
import FetchData from '@/lib/fetchData(client)';
import { CustomerTable } from '@/components/dataTable/customer-table';


export default  function Customers() {
  const [customers, setCustomers]=useState([])
  return (
    <div className='p-3 space-y-2 '>
    <h2 className=' dark:text-white  font-medium '>Customers</h2>
    {/* page functions 1 */}
  
<FetchData state={customers} setState={setCustomers} endpoint={'register'}/>
<CustomerTable columns={columns} data={customers} name='customers'/>
    </div>
  )
}
