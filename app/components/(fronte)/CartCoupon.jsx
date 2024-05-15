import React from 'react'
import TextInput from '../formInputs/TextInput'
import { useForm } from 'react-hook-form'
import { Button } from 'flowbite-react';

export default function CartCoupon() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        // spread the initial data gotten from our API as default value so we can update them
      } = useForm();
  return (
    <div>
        <form className="w-full gap-1  flex  " >
<TextInput
       label="Coupon code"
       name="coupon"
       register={register}
       errors={errors}
       className='w-4/6 '

     />
     
<div className='w-2/6 mt-8'>
      <Button gradientDuoTone="pinkToOrange">APPLY</Button>
</div> 
</form>
    </div>
  )
}
