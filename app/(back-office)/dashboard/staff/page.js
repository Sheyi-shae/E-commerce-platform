import ColumnAction from '@/app/components/(backe)/ColumnAction'
import Tablesearch from '@/app/components/(backe)/TableSearch'
import React from 'react'


export default function Staff() {
  return (
    <div className='p-3 space-y-2'>
    <h2 className=' dark:text-white  font-medium'>Staff Room</h2>
    {/* page functions 1 */}
    <ColumnAction name={'Add Staff'} link={'/dashboard/staff/newstaff'}/>

<Tablesearch name={'Staff Search'} placeholder={'Search for staff....'}/>
    </div>
  )
}
