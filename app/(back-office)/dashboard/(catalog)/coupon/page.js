"use client"
import React, { useState } from 'react'

import ColumnAction from '@/app/components/(backe)/ColumnAction'

import FetchData from '@/lib/fetchData(client)'
import { DataTable } from '@/components/dataTable/data-table'
import { columns } from './columns'

export default function Coupon() {
  const [couponData,setCouponData]=useState([])
  return (
    <div className='p-3 space-y-2'>
    <h2 className=' dark:text-white  font-medium'>Coupon</h2>
    {/* page functions 1 */}
    <ColumnAction name={'New Coupon'} link={'/dashboard/coupon/newcoupon'}/>

    <FetchData state={couponData} setState={setCouponData} endpoint={'coupon'}/>


<DataTable columns={columns} data={couponData} name='category'/>
    </div>
  )
}
