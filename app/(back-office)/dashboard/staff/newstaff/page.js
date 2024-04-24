"use client"
import ImageInput from '@/app/components/formInputs/ImageUploader';
import TextInput, { SelectInput, SubmitButton, TextareaInput } from '@/app/components/formInputs/TextInput';
import { makePostRequest } from '@/lib/apiRequest';
import { generateId } from '@/lib/generateId';
import RandomPasswordGenerator from '@/lib/generatePassword';
import GeneratePassword from '@/lib/generatePassword';
import { generateSlug } from '@/lib/generateSlug';
import { Undo2 } from 'lucide-react'
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


export default function NewCategory() {

  const [password,setPassword]=useState('');
  const handleGeneratedPassword=(generatedPassword)=>{
    setPassword(generatedPassword);
  }
  const options=[
    {title:"Information Technology"},
    { title:"Human Resource"},
    { title:"Finance Unit"},
    { title:"Operations Unit"},
  ]
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl]=useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  //form submission starts here
  async function onSubmit(data){

    // slug is used to generate dynamic urls

    const staffId=generateId(data.StaffDepartment,data.StaffDate); 
    
    //adding the slug generated to data
    data.staffId=staffId;
    data.imageURL=imageUrl;
    data.password= password;
    
    console.log(data)
    makePostRequest(
      setLoading,
      "api/staff",
      data,
      "staff",
      reset,
      
    )
    router.push('/dashboard/staff/');
   
  }

  
  return (
    <div className='p-3 '>
    {/* page header */}
    <div className=' dark:text-white  font-medium flex justify-between bg-white dark:bg-slate-800 p-4 rounded-sm shadow-sm'>
<span><h2 >Add New Staff</h2></span>
<button onClick={()=>router.back()}><Undo2/></button>

    </div>
    {/* end page header */}
    {/* form begins */}
    <div>
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl p-4 shadow-md bg-white border border-gray-200 rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Staff First Name"
            name="FirstName"
            register={register}
            errors={errors}
            className='grid-cols-1'
          />
          <TextInput
            label="Staff Last Name"
            name="LastName"
            register={register}
            errors={errors}
            className='grid-cols-1'
          />
          <SelectInput
            label="Staff Department"
            name="StaffDepartment"
            options={options}
            register={register}
            errors={errors}
            className='grid-cols-1 z-10'
          />
          <TextInput
            label="Staff Role"
            name="StaffRole"
            register={register}
            errors={errors}
            className='grid-cols-1'
          />
           <TextInput
            label="Staff DOB"
            name="StaffDate"
            register={register}
            errors={errors}
            type='date'
          />
          
            <ImageInput imageUrl={imageUrl} 
            setImageUrl={setImageUrl} 
            label={'Staff passport'} endpoint='staffImageUploader'/>
           
      
        
           <RandomPasswordGenerator owner={'Staff Password'} 
           className='dark:bg-slate-200 shadow-sm bg-slate-600 px-7 py-2 z-20 dark:text-slate-700' onPasswordGenerated={handleGeneratedPassword}/>
            
          </div> 

          {password && <SubmitButton 
          isLoading={loading}
          title="new staff"
        />
}
         
        
      </form>
    </div>
    {/* form ends */}

    </div>
  )
}
