"use client"
import ArrayTagInput from '@/app/components/formInputs/ArrayTagInput';
import { MultipleImageInput } from '@/app/components/formInputs/ImageUploader';
import TextInput, { SelectInput, SubmitButton, TextareaInput } from '@/app/components/formInputs/TextInput';
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import FetchData from '@/lib/fetchData(client)';
import { generateSlug } from '@/lib/generateSlug';

import {  Undo2, } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


export default function ProductForm({title,initialData={}}) {
 const initialImage=initialData?.imageUrl??""

 const id =initialData.id
 
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl]=useState(initialImage)
  const [productImages, setProductImages]=useState([])

  const [category, setCategory]=useState([])
  
  const[tags,setTags]=useState([])
  const qty=1

  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({defaultValues:{
    ...initialData
  }});
  const router = useRouter();

  
  //form submission starts here
  async function onSubmit(data){

    // slug is used to generate dynamic urls

    const slug=generateSlug(data.title); 
    data.tags=tags
    data.productImages=productImages;
    data.qty=qty
    
    
    //adding the slug generated to data
    data.slug=slug;
   
   if(id){
    makePutRequest(
      setLoading,
      `api/products/${id}`,
      data,
      "product"
    )

  }else{
    makePostRequest(
      setLoading,
      "api/products",
      data,
      "product",
      reset
    )
    
}
    
    router.push('/dashboard/products/');
  }

  
  
  
  return (
    <div className='p-3 '>
    {/* page header */}
    <FetchData state={category} setState={setCategory} endpoint={'categories'}/>
    <div className=' dark:text-white  font-medium  flex justify-between bg-white dark:bg-slate-800 p-4 rounded-sm shadow-sm'>
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
            options={category}
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
       
           {/* product images */}
     <MultipleImageInput imageUrls={productImages} 
            setImageUrls={setProductImages} 
            label={'Product Images'} endpoint='productMultipleImageUploader' />
          
          <TextInput
            label="Product Stock"
            name="stock"
            register={register}
            errors={errors}
            type='number'
          />
             <TextInput
            label="Initial Price(&#8358;)"
            name="Origninalprice"
            register={register}
            errors={errors}
            className='grid-cols-1'
            type='number'
          />
          <TextInput
            label="Discounted Price(&#8358;)"
            name="Discountedprice"
            register={register}
            errors={errors}
            className='grid-cols-1'
            type='number'
          />
          </div> 
          {productImages && 
          <SubmitButton 
        
          isLoading={loading}
          title={id?"update product " : "create new product"}
          loadingTitle={id? 'updating please wait...':'creating please wait...'}
        />
        }
          
      </form>
    </div>
    {/* form ends */}

    </div>
  )
}
