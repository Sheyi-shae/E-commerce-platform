'use client'
import ColumnAction from '@/app/components/(backe)/ColumnAction'
import { StaffTable } from '@/components/dataTable/staff-table'
import FetchData from '@/lib/fetchData(client)'

import React, { useState } from 'react'
import { columns } from './columns'


export default function Staff() {
  const[staff, setStaff]=useState([])
  return (
    <div className='p-3 space-y-2'>
    <h2 className=' dark:text-white  font-medium'>Staff Room</h2>
    {/* page functions 1 */}
    <ColumnAction name={'Add Staff'} link={'/dashboard/staff/newstaff'}/>

    <FetchData state={staff} setState={setStaff} endpoint={'staff'}/>
    <StaffTable columns={columns} data={staff} name='staff by ID'/>
    </div>
  )
}
