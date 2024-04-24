import React from 'react'

export default function UpdateCoupon({params:{id}}) {
    const category = await getData(`coupon/${id}`)
  return (
    <div>
        
    </div>
  )
}
