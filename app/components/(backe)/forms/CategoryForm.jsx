"use client"
import ImageInput from '@/app/components/formInputs/ImageUploader';
import TextInput, { SubmitButton, TextareaInput } from '@/app/components/formInputs/TextInput';
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import { generateSlug } from '@/lib/generateSlug';
import { Undo2 } from 'lucide-react'
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


export default function CategoryForm({title, initialData={}}) {
    const id = initialData?.id
    const initialImage=initialData?.imageURL??""
    
    // if initialData is null or undefined, or if initialData.imageURL
    // is null or undefined, the empty string ("") will be assigned to initialImage
  
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl]=useState(initialImage)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // spread the initial data gotten from our API as default value so we can update them
  } = useForm({defaultValues:{
    ...initialData
  }});
  const router = useRouter();

  //form submission starts here
  async function onSubmit(data){

    // slug is used to generate dynamic urls

    const slug=generateSlug(data.title); 
    //adding the slug generated to data
    data.slug=slug;
    data.imageURL=imageUrl;
    console.log(imageUrl)
    
   if(id){
    //update
    makePutRequest(
      setLoading,
      `api/categories/${id}`,
      data,
      "category"
    )
   }else
   {
    //create
    makePostRequest(
      setLoading,
      "api/categories",
      data,
      "category",
      reset,
      
    )
  }
    router.push('/dashboard/categories/');
   
  }

  
  return (
    <div className='p-3 '>
    {/* page header */}
    <div className=' dark:text-white  font-medium flex justify-between bg-white dark:bg-slate-800 p-4 rounded-sm shadow-sm'>
<span><h2 >{title}</h2></span>
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
          title={id?"update category" : "create new category"}
          loadingTitle={id? 'updating please wait...':'creating please wait...'}
        />
      </form>
    </div>
    {/* form ends */}

    </div>
  )
}
