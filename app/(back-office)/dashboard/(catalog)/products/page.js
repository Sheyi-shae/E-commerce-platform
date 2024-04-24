
import ColumnAction from '@/app/components/(backe)/ColumnAction'
import Tablesearch from '@/app/components/(backe)/TableSearch'
import { DataTable } from '@/components/dataTable/data-table';
import { getData } from '@/lib/getData';
import React from 'react'
import { columns } from './columns';


export default async function Products() {
  const productsData = await getData("products");
  return (
    <div className='p-3 space-y-2 '>
    <h2 className=' dark:text-white  font-medium '>Products</h2>
    {/* page functions 1 */}
    <ColumnAction name={'New Product'} link={'/dashboard/products/newproduct'}/>

<DataTable columns={columns} data={productsData} name='product'/>
    </div>
  )
}
