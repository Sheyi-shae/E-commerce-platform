'use client'
import React, { useState } from 'react'

import ColumnAction from '@/app/components/(backe)/ColumnAction'

import { getData } from '@/lib/getData';

import { columns } from './columns';
import { DataTable } from '@/components/dataTable/data-table';
import FetchData from '@/lib/fetchData(client)';


export default   function Categories() {
  const [categoriesData,setCategoriesdata]=useState([])
   //get request from api categories



  
  return (
    <div className='p-3 space-y-2'>
    <h2 className=' dark:text-white  font-medium'>Categories</h2>
    {/* page functions 1 */}
<ColumnAction name={'New Category'} link={'/dashboard/categories/newcategory'}/>


<br/>
<hr/>
<br/>

{/* fetch table */}
<FetchData state={categoriesData} setState={setCategoriesdata} endpoint={'categories'}/>


<DataTable columns={columns} data={categoriesData} name='category'/>


    </div>
  )
}
