import CouponForm from '@/app/components/(backe)/forms/CouponForm'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function UpdateCoupon({params:{id}}) {
    const coupon = await getData(`coupon/${id}`)
  return (
    <div>
        <CouponForm title={'Update Coupon'} initialData={coupon}/>
    </div>
  )
}
