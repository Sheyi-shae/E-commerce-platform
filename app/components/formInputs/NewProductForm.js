"use client"
import ArrayTagInput from '@/app/components/formInputs/ArrayTagInput';
import ImageInput, { ImageInputDropZone } from '@/app/components/formInputs/ImageUploader';
import TextInput, { SelectInput, SubmitButton, TextareaInput } from '@/app/components/formInputs/TextInput';
import { makePostRequest } from '@/lib/apiRequest';
import { generateSlug } from '@/lib/generateSlug';

import { Undo2,  } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


export default function NewProductForm({categories}) {
 

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl]=useState('')
  
  

  const[tags,setTags]=useState([])
  

  

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
    data.tags=tags
    data.imageUrl=imageUrl;
    
   
    
    //adding the slug generated to data
    data.slug=slug;
   console.log(data)
    makePostRequest(
      setLoading,
      "api/products",
      data,
      "product",
      reset
    )
    setImageUrl('');
    router.push('/dashboard/products/');
  }

  
  
  
  return (
    <div className='p-3 '>
    {/* page header */}
    <div className=' dark:text-white  font-medium  flex justify-between bg-white dark:bg-slate-800 p-4 rounded-sm shadow-sm'>
<span><h2 >Create New Product</h2></span>
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
            label="Product Name"
            name="title"
            register={register}
            errors={errors}
            className='grid-cols-1'
          />
          <SelectInput
            label="Select Product Category"
            name="categoryId"
            register={register}
            errors={errors}
            className='grid-cols-1'
            options={categories}
          />

           
           
      <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
        {/* tag sec */}
        {/* we need tags and set tags in order to dend them to them data base */}
        <ArrayTagInput  tags={tags} setTags={setTags}/>
       

        {/* end tag sec */}
       
           
     <ImageInput imageUrl={imageUrl} 
            setImageUrl={setImageUrl} 
            label={'Product Image(s)'} endpoint='productImageUploader' />
             <TextInput
            label="Product Price(&#8358;)"
            name="price"
            register={register}
            errors={errors}
            
            type='number'
          />
          </div> 
          {imageUrl && <SubmitButton 
          isLoading={loading}
          title="new product"
        />}
          
      </form>
    </div>
    {/* form ends */}

    </div>
  )
}
