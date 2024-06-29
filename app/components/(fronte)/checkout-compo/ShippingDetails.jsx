'use client'
import React, { useState } from 'react'
import TextInput, { SelectInput, SelectInputTitle } from '../../formInputs/TextInput'
import { useForm } from 'react-hook-form';
import { Button, Checkbox, Label } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStep2 } from '@/redux/slices/checkoutSlice';

export default function ShippingDetailsForm({onNext,onPrevious,sessions}) {
    const [saveAddress, setSaveAddress]=useState(false)
    const dispatch = useDispatch()
    const shipping=useSelector((state) => state.checkout.step2);
    const handleChange=(e)=>{
        setSaveAddress(e.target.checked)

    }
   const email= sessions?.user.email
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
       
      } = useForm({defaultValues:{...shipping}});

      const country=[{id:1,title:'Nigeria'}]
      const state=[{id:1,title:'Abuja'},{id:1,title:'Lagos'},{id:1,title:'Port-Harcourt'}]

      async function shippingData(data){
        data.SaveAddress=saveAddress
        dispatch(updateStep2(data))
        console.log(data)
        onNext()
      }

    
  return (
    <div>
        <form
        onSubmit={handleSubmit(shippingData)}
        className="w-full max-w-2xl p-4  bg-white border border-gray-200 rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        
         
          <TextInput
            label="Address"
            name="address"
            register={register}
            errors={errors}
            
            
          />
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          <SelectInputTitle
            label={'Country'}
            name={'country'}
            register={register}
            options={country}
           className='grid-cols-3'
           errors={errors}
          />
          <TextInput
            label="City"
            name="city"
            register={register}
            errors={errors}
            className='grid-cols-3'
          />
           <SelectInputTitle
            label={'State'}
            name={'state'}
            register={register}
            options={state}
           className='grid-cols-3'
          />
      
        
    
          </div> 
          
        
          <div className="flex items-center gap-2 mt-2">
        <Checkbox id="saveadress"  value={saveAddress} onChange={handleChange} name='saveaddress' />
        <Label htmlFor="saveaddress">I want to save this address for future purchase</Label>
      </div>
      <div className='mt-4 flex gap-2'>
      <Button gradientDuoTone="pinkToOrange" disabled={email} onClick={()=>onPrevious()} type="button"  className="px-4 montserrat">Previous</Button>
        <Button gradientDuoTone="pinkToOrange"  type="submit"  className="px-4 montserrat">Next</Button>
        </div>
      </form>
    </div>
  )
}
