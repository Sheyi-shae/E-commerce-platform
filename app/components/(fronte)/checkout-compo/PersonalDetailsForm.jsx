'use client'
import React from 'react'
import TextInput from '../../formInputs/TextInput'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateStep1 } from '@/redux/slices/checkoutSlice';
import { Button } from 'flowbite-react';
import AcccountModal from '../AcccountModal';

export default function PersonalDetailsForm({onNext}) {
 

    
  return (
    <div className='flex justify-center items-center mt-10'>
        {/* <form
        onSubmit={handleSubmit(personalData)}
        className="w-full max-w-2xl p-4  bg-white border border-gray-200 rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="First Name"
            name="firstName"
            register={register}
            errors={errors}
            className='grid-cols-2'
          />
          <TextInput
            label="Last Name"
            name="lastName"
            register={register}
            errors={errors}
            className='grid-cols-2'
          />
          <TextInput
            label="Email"
            name="email"
            type='email'
            register={register}
            errors={errors}
            className='grid-cols-2'
          />
          <TextInput
            label="Phone Number"
            name="number"
            type='number'
            register={register}
            errors={errors}
            className='grid-cols-2'
          />
      
        
    
          </div> 
          <div className='mt-4'>
        <Button gradientDuoTone="pinkToOrange" type="submit"  className="px-4 montserrat">Next</Button>
        </div>
          
      </form> */}
    <Button gradientDuoTone={'pinkToOrange'}> 
    <AcccountModal title={'Please sign in to continue...'} className={'m-3'}/></Button>
     

    </div>
  )
}
