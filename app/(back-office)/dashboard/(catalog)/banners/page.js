
import React from 'react'

import ColumnAction from '@/app/components/(backe)/ColumnAction'
import Tablesearch from '@/app/components/(backe)/TableSearch'

export default function Banners() {
  return (
    <div className='p-3 space-y-2'>
    <h2 className=' dark:text-white  font-medium'>Store Banners</h2>
    {/* page functions 1 */}
<ColumnAction name={'New Banner'} link={'/dashboard/banner/newbanner'}/>

<Tablesearch name={'Banner Search'} placeholder={'Search for banner....'}/>
    </div>
  )
}
