import Quantity from '@/app/components/(fronte)/products/Quanitty'
import { MainTab } from '@/app/components/(fronte)/tabs/MainTab'
import { getData } from '@/lib/getData'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import ProductDetail from '../ProductDetail'
import {  Home } from 'lucide-react'
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import Link from 'next/link'

export default async function ProductDetails({params:{slug}}) {
    const product= await getData(`productdetails/${slug}`)
   
  return (
    <div className='px-3 py-1'>
     <Breadcrumb aria-label="Solid background breadcrumb example" className=" rounded-sm bg-gray-50 px-5 py-3 montserrat dark:bg-gray-800">
     <Link href="/"><Breadcrumb.Item  icon={Home}>
        Home
      </Breadcrumb.Item></Link>
      <Breadcrumb.Item className='text-xs md:text-sm whitespace-nowrap' href="#">Product</Breadcrumb.Item>
      <Breadcrumb.Item className='text-xs md:text-sm whitespace-nowrap'>{product.title}</Breadcrumb.Item>
    </Breadcrumb>
    <div className='px-3 md:px-36'>
    <ProductDetail product={product}/>
{/* tabs */}

<div>
<MainTab description={product.description} reviews={product.reviews} productId={product.id}/>
</div>
    </div></div>
  )
}
