import ProductForm from '@/app/components/(backe)/forms/ProductForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function UpdateProduct({params:{id}}) {
    const product = await getData(`products/${id}`)
  return (
    <div>
        <ProductForm title='Update Product' initialData={product}/>
    </div>
  )
}
