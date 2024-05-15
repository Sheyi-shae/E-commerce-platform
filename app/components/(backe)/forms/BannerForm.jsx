"use client"
import ImageInput, { ImageInputDropZone } from '@/app/components/formInputs/ImageUploader';
import TextInput, { SubmitButton, TextareaInput, ToggleInput } from '@/app/components/formInputs/TextInput';
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import { generateSlug } from '@/lib/generateSlug';
import { Undo2 } from 'lucide-react'
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


export default function BannerForm({name,initialData={}}) {
  const initialImage=initialData.imageURL??""//if !initialdta.imageurl, return "" empty string
  const id =initialData.id
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl]=useState(initialImage)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:{
      isActive:true,
      ...initialData
    }
  });
  //Watch it to be change off and on in real time
  const isActive = watch("isActive");
  const router = useRouter();
  

  //form submission starts here
  async function onSubmit(data){

    // slug is used to generate dynamic urls

    const slug=generateSlug(data.title); 
    //adding the slug generated to data
    data.slug=slug;
    data.imageURL=imageUrl;
   
    if(id){
        makePutRequest(
            setLoading,
            `api/banners/${id}`,
            data,
            "Banner",
             
        )
    } else{
    makePostRequest(
      setLoading,
      "api/banners",
      data,
      "Banner",
      reset,
      
    )}
   
    router.push('/dashboard/banners/');
   
  }

  
  return (
    <div className='p-3 '>
    {/* page header */}
    <div className=' dark:text-white  font-medium flex justify-between bg-white dark:bg-slate-800 p-4 rounded-sm shadow-sm'>
<span><h2 >{name}</h2></span>
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
            label="Banner Name"
            name="title"
            register={register}
            errors={errors}
          />
           
            <ImageInputDropZone imageUrl={imageUrl} 
            setImageUrl={setImageUrl} 
            label={'Banner'} endpoint='bannerImageUploader'/>
           
         <ToggleInput label={'Activation'} name={'isActive'} register={register} trueTitle={'Active'}
          falseTitle={'Draft'}/>
        
    
          </div> 
          {imageUrl && <SubmitButton 
          isLoading={loading}
          title={id?"update banner" :"create new banner"}
          loadingTitle={id?'updating please wait...':'creating please wait...'}
        />}
      </form>
    </div>
    {/* form ends */}

    </div>
  )
}
