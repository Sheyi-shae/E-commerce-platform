"use client"
import ImageInput from '@/app/components/formInputs/ImageUploader';
import TextInput, { SubmitButton, TextareaInput } from '@/app/components/formInputs/TextInput';
import { makePostRequest } from '@/lib/apiRequest';
import { generateCouponCode } from '@/lib/generateCoupon';
import { Undo2 } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


export default function CouponForm({title,initialData={}}) {
  const id=initialData.id
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    
    reset,
    formState: { errors },
  } = useForm({defaultValues:{
    ...initialData
  }});
  const router = useRouter();
//  const titles = watch('title');
//  const date = watch('expiryDate');
// console.log(titles, date);

  //form submission starts here
  async function onSubmit(data){

    const couponSlug=generateCouponCode(data.title,data.expiryDate);
    data.couponSlug=couponSlug 
    if(id){
      makePutRequest(
        setLoading,
        `api/coupon/${id}`,
        data,
        "coupon"
      )

    }else{
    makePostRequest(
      setLoading,
      "api/coupon",
      data,
      `coupon ${couponSlug}`,
      reset
    )
    router.push('/dashboard/coupon/');
  }
   
  }

  
  return (
    <div className='p-3 '>
    {/* page header */}
    <div className=' dark:text-white  font-medium flex justify-between bg-white dark:bg-slate-800 p-4 rounded-sm shadow-sm'>
<span><h2 >{title}</h2></span>
<button onClick={()=>router.back()}><Undo2/></button>

    </div>
    
    <div>
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl p-4 shadow-md bg-white border border-gray-200 rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
            type='text'
          />
           <TextInput
            label="Expiry Date"
            name="expiryDate"
            register={register}
            errors={errors}
            type='date'
          />
          <TextInput
            label="% Discount"
            name="discount"
            register={register}
            errors={errors}
            type='number'
          />
         
         {/* <TextInput
            label="Generated Coupon"
            name="generatedCoupon"
            register={register}
            errors={errors}
            type='text'
            
          /> */}
           
        
          </div> 
          <SubmitButton 
          isLoading={loading}
          title={id?"update coupon" : "create new coupon"}
          loadingTitle={id? 'updating please wait...':'creating please wait...'}
        />
      </form>
    </div>

    </div>
  )
}
