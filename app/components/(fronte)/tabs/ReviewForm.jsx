import React, { useState } from 'react'
import TextInput, { TextareaInput } from '../../formInputs/TextInput';
import { Button } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { makePostRequest } from '@/lib/apiRequest';
import toast from 'react-hot-toast';


export default  function ReviewForm({productId, isOpen,setIsOpen}) {
    const [starRating,setStarRating]=useState(null)
    const [starHover,setStarHover]=useState(null)
    const[loading,setLoading]=useState(false)

    

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
      };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        // spread the initial data gotten from our API as default value so we can update them
      } = useForm();

      async function onSubmit(data){
        if (!starRating){
        return (
          toast.error('Give star  rating')
        )
        }
        else{
        setLoading(true)
         try {
          
           data.ratings=starRating
           data.productId=productId
           
           makePostRequest(
             setLoading,
             "api/reviews",
             data,
             "review",
             reset,
             
           )
           setLoading(false)
           setTimeout(() => {
             setIsOpen(!isOpen);
           }, 2000);
           
         } catch (error) {
           console.log(error)
         }
        
        }
       }
  return (
    <div>

<form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl p-2 shadow-md bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
{/* star ratings here */}
<div className='flex justify-center'>
 {[...Array(5)].map((star,index)=>{
   const ratingValue= index + 1;
   
   return(
    
    <div className='mb-5' key={index}>
    <label className='hover:cursor-pointer'
    onMouseEnter={()=>setStarHover(ratingValue)}
    onMouseLeave={()=>setStarHover(null)}

>
    <input type='radio' className='hidden ' value={ratingValue} onClick={()=>setStarRating(ratingValue)}/>
      <p className={`text-5xl transition-all duration-700 ${ratingValue <= (starHover || starRating) ?
       "text-yellow-300 opacity-100" : "text-slate-300 " }`}>&#9733;</p></label>
       
    </div>

     
    
   )
 })}
   
 </div>

  <TextInput
       label="Customer Name"
       name="customer_name"
       register={register}
       errors={errors}
     />
     <TextareaInput
       label="Customer Review"
       name="review"
       register={register}
       errors={errors}
     />
     {/* submit button */}
     <div className='flex gap-3 mt-3 justify-end'>
     <Button onClick={toggleCollapse} outline gradientMonochrome="failure">
   Cancel
 </Button>
 

 <Button type='submit'  gradientMonochrome="success">
  {/* spinner */}
 
 Submit</Button>

     </div>


      </form>
    </div>
  )
}
