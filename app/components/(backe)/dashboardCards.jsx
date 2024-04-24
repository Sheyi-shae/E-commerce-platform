import { CarFront, Layers2, Layers2Icon, Layers3, LucideLayers2, LucideShoppingCart, ShoppingBag, ShoppingBasket, ShoppingCart, ShoppingCartIcon, Sparkles } from 'lucide-react'
import React from 'react'

export default function DashboardCards() {
  const sales =[
    
  ]
  return (
    <div>
        <div className='grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-5 p-3 gap-2  text-center'>
        <div className='bg-blue-600 shadow-md  p-2'>
        {/* cards */}
      <span className='text-white capitalize  ' >
      <center><Layers2 size={32}/></center>
        today sales
        <p>{'\u20A6'} 80,000</p>
      </span>
      
</div>
<div className='bg-green-600 shadow-md w-auto h-auto p-2'>
        {/* cards */}
      <span className='text-white capitalize ' >
      <center><Layers3 size={32}/></center>
        yesterday orders
        <p>{'\u20A6'} 120,000</p>
      </span>
      
</div>
<div className='bg-orange-600 shadow-md w-auto h-auto p-2'>
        {/* cards */}
      <span className='text-white capitalize ' >
      <center><ShoppingCart size={32}/></center>
        current month 
        <p>{'\u20A6'} 780,000</p>
      </span>
      
</div>
<div className='bg-yellow-600 shadow-md w-auto h-auto p-2'>
        {/* cards */}
      <span className='text-white capitalize ' >
      <center><ShoppingBasket size={32}/></center>
        previous month
        <p>{'\u20A6'} 1,080,000</p>
      </span>
      
</div>
<div className='bg-violet-600 shadow-md w-auto h-auto p-2'>
        {/* cards */}
      <span className='text-white capitalize ' >
      <center><ShoppingBag size={32}/></center>
        all-time sales
        <p>{'\u20A6'} 9,080,000</p>
      </span>
      
</div>
        </div>
    </div>
  )
}
