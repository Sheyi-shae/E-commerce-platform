import Quantity from '@/app/components/(fronte)/products/Quanitty'
import { MainTab } from '@/app/components/(fronte)/tabs/MainTab'
import { getData } from '@/lib/getData'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import ProductDetail from '../ProductDetail'

export default async function ProductDetails({params:{slug}}) {
    const product= await getData(`productdetails/${slug}`)
   
  return (
    <div className='px-3 md:px-36'>
    <ProductDetail product={product}/>
{/* tabs */}

<div>
<MainTab description={product.description} productId={product.id}/>
</div>
    </div>
  )
}
