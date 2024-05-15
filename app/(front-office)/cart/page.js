import React from 'react'
import { CartComponent } from './CartComponent'
import { MobileCartComponent } from './MobileCart'

export default function page() {
  return (
    <div className='lg:p-8 lg:px-24 p-1 px-2 md:p-2 md:px-3'>
    <h3 className='flex justify-center lato-bold text-lg md:text-2xl '>My Shopping Cart</h3>
    <div className="hidden md:block">
      <CartComponent />
      </div>
      <div className="md:hidden sm:block flex">
      <MobileCartComponent />
      </div>
    </div>
  )
}
