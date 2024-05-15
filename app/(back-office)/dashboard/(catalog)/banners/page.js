'use client'
import React, { useState } from 'react'

import ColumnAction from '@/app/components/(backe)/ColumnAction'
import FetchData from '@/lib/fetchData(client)'
import { columns } from './columns'
import { DataTable } from '@/components/dataTable/data-table'


export default function Banners() {
  const [banner, setBanner]=useState([])
  return (
    <div className='p-3 space-y-2'>
    <h2 className=' dark:text-white  font-medium'>Store Banners</h2>
    {/* page functions 1 */}
<ColumnAction name={'New Banner'} link={'/dashboard/banners/newbanner'}/>

<FetchData state={banner} setState={setBanner} endpoint={'banners'}/>


<DataTable columns={columns} data={banner} name='Banners'/>
    </div>
  )
}
