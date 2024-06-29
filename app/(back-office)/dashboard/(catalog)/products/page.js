"use client"
import ColumnAction from '@/app/components/(backe)/ColumnAction'
import { DataTable } from '@/components/dataTable/data-table';

import React, { useState } from 'react'
import { columns } from './columns';
import FetchData from '@/lib/fetchData(client)';


export default  function Products() {
  const [productsData, setProductData]=useState([])
  return (
    <div className='p-3 space-y-2 '>
    <h2 className=' dark:text-white  font-medium '>Products</h2>
    {/* page functions 1 */}
    <ColumnAction name={'New Product'} link={'/dashboard/products/newproduct'}/>
<FetchData state={productsData} setState={setProductData} endpoint={'products'}/>
<DataTable columns={columns} data={productsData} name='product'/>
    </div>
  )
}
