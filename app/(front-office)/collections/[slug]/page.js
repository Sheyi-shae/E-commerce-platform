import React from 'react'
import { getData } from '@/lib/getData'
import SortingComponent from '../Sorting'

export default async function page({params:{slug}}) {
    const categoryProduct= await getData(`categoryproduct/${slug}`)
    const products=categoryProduct.products
    const categoryTitle=categoryProduct.title
   
    

  return (
    <div className=''>
    {/* sorting system */}
    <SortingComponent items={products} heading={categoryTitle}/>
       
    </div>
  )
}
