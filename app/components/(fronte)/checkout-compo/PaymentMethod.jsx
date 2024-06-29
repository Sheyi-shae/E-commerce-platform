'use client'
import { Button, Label, Radio } from 'flowbite-react';
import { CreditCard, PencilLine, Wallet } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function PaymentMethod({onNext,onPrevious,address}) {
    const[paymentMethod,setPaymentMethod]=useState("")
   
        const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
       
      } = useForm();


      async function paymentData(data){
        data.paymentMethod=paymentMethod
       
        console.log(data)
        onNext()
      }
  return (
    <div>
    <form
        onSubmit={handleSubmit(paymentData)}
        className="w-full max-w-2xl p-4  bg-white border montserrat border-gray-200 rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
      <legend className="mb-4 capitalize">Choose a convinient payment method</legend>
      <div className='flex flex-col md:flex-row justify-center items-center w-full gap-2'>

{/* credit card */}
      <div className='ring-1 ring-slate-300 rounded-sm shadow-sm w-1/2 p-2'>
      <div className="flex items-center gap-2">
      
      <Radio id="creditcard"
      disabled
                value='card'
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className='' />
        <Label htmlFor="creditcard" className=''>Credit Card</Label>

        <CreditCard/>

      </div>
      </div>
      {/* end credit */}

{/* cash on delivery */}
      <div className='ring-1 ring-slate-300 w-1/2 rounded-sm shadow-sm  p-2'>
      <div className="flex items-center gap-2">
      
      <Radio id="wallet" value={'cash'} checked={paymentMethod==='cash'} onChange={()=>setPaymentMethod('cash')} className='' />
        <Label htmlFor="wallet" className=''>Cash on Delivery</Label>

        <Wallet/>

      </div>
      </div>

      </div>
     
      <div className='mt-4 flex gap-2'>
      <Button gradientDuoTone="pinkToOrange"  outline onClick={()=>onPrevious()} type="button"  className=" capitalize montserrat">
      {address ? (
  
        <span className='flex gap-2'><PencilLine size={17}/> change address</span>
  
) : (
  <span>Previous</span>
)}</Button>
        <Button gradientDuoTone="pinkToOrange" disabled={!paymentMethod} type="submit"  className="px-4 montserrat">Next</Button>
        </div>

      </form>

    </div>
  )
}
