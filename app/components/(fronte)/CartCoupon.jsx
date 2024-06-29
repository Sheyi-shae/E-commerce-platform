'use client'
import React, { useState } from 'react'
import TextInput from '../formInputs/TextInput'
import { useForm } from 'react-hook-form'
import { Button } from 'flowbite-react';
import { checkCoupon } from '@/lib/checkCoupon';
import LoadingDots from './regForms/LoadingDots';
import { useDispatch, useSelector } from 'react-redux';
import { resetCoupon, updateAmountPaid } from '@/redux/slices/couponSlice';


export default function CartCoupon({subTotal}) {
  const [isLoading, setIsLoading]=useState(false)
  const dispatch=useDispatch()
  const amountPaid = useSelector((state) => state.coupon.amountPaid);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        
      } = useForm();

      //application of coupon
      async function onSubmit(data){
        setIsLoading(true)
        
      const amountPaid = await checkCoupon(data.coupon,subTotal)
      
       dispatch(updateAmountPaid(amountPaid))

       setIsLoading(false)
      }
      //coupon reset
      function clearCoupon () {
        dispatch(resetCoupon())
      }
      const isValidInteger = (value) => {
        return !isNaN(value) && Number.isInteger(parseFloat(value));
      };
      
  return (
    <div className="">
        <form className="w-full gap-1  flex  " onSubmit={handleSubmit(onSubmit)}>
<TextInput
       label="COUPON"
       name="coupon"
       register={register}
       errors={errors}
       className='w-4/6 '

     />
     
<div className='w-2/6 mt-8 flex gap-2 whitespace-nowrap '>
{isLoading ? (
      <Button gradientDuoTone="greenToBlue" disabled={isLoading} type='submit'>Applying <LoadingDots/></Button>
):(
  <Button gradientDuoTone="greenToBlue" disabled={isValidInteger(amountPaid)} type='submit'>Apply</Button>
)}
<Button gradientDuoTone="greenToBlue" outline onClick={clearCoupon} disabled={!amountPaid} type='button'>Try Again</Button>
</div> 
</form>
    </div>
  )
}
