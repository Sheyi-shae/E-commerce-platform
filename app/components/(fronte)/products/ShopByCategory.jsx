'use client'
import FetchData from '@/lib/fetchData(client)'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

function ShopByCategory() {
    const [category, setCategory]=useState([])
    
   
    
    
  return (
    <div className='w- full px-2'>
<FetchData endpoint={'categories'} state={category} setState={setCategory} />

{category.map((item)=>(
    
    <>
    <Link key={item.id} href={`./${item.slug}`}>
    <div className='flex justify-between montserrat dark:text-slate-50 text-slate-800'>
    <div >{item.title}</div>
   <div className='text-sm'>({item.products.length})</div>
   </div>
   </Link>
   </>
    
))}
    </div>
  )
}

export default ShopByCategory