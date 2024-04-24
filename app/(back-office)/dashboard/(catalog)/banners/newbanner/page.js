"use client"
import ImageInput from '@/app/components/formInputs/ImageUploader';
import TextInput, { SubmitButton, TextareaInput } from '@/app/components/formInputs/TextInput';
import { makePostRequest } from '@/lib/apiRequest';
import { generateSlug } from '@/lib/generateSlug';
import { Undo2 } from 'lucide-react'
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


export default function NewCategory() {
  
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

    const slug=generateSlug(data.title); 
    //adding the slug generated to data
    data.slug=slug;
    data.imageURL=imageUrl;
    console.log(imageUrl)
    
   
    makePostRequest(
      setLoading,
      "api/categories",
      data,
      "category",
      reset,
      
    )
    router.push('/dashboard/categories/');
   
  }

  
  return (
    <div className='p-3 '>
    {/* page header */}
    <div className=' dark:text-white  font-medium flex justify-between bg-white dark:bg-slate-800 p-4 rounded-sm shadow-sm'>
<span><h2 >Create New Category</h2></span>
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
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
           <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
            <ImageInput imageUrl={imageUrl} 
            setImageUrl={setImageUrl} 
            label={'Category Image'} endpoint='categoryImageUploader'/>
           
      
        
    
          </div> 
          <SubmitButton 
          isLoading={loading}
          title="new category"
        />
      </form>
    </div>
    {/* form ends */}

    </div>
  )
}
