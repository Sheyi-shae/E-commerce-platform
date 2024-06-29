'use client'
import React, { useState } from 'react'
import  { TextareaInput } from '../../formInputs/TextInput';
import { Button, } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { makePostRequest } from '@/lib/apiRequest';
import toast from 'react-hot-toast';
import LoadingDots from '../regForms/LoadingDots';
import { useSession } from 'next-auth/react';


export default  function ReviewForm({productId, isOpen,setIsOpen}) {
  const [starRating, setStarRating] = useState(0);
  const [starHover, setStarHover] = useState(0);
    const[loading,setLoading]=useState(false)
    const { data: session } = useSession();
     const firstName=session?.user?.firstName
     const lastName=session?.user?.lastName
     const name= firstName + ' ' + lastName

    

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
      };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
       
      } = useForm();

      async function onSubmit(data){
        if (starRating === 0) {
          return toast.error('Please provide a star rating');
      }

      setLoading(true);

         try {
          
           data.ratings=starRating
           data.productId=productId
           data.customer_name=name
           
         await  makePostRequest(
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
          console.error(error);
          toast.error('Failed to submit review');
          setLoading(false);
         }
        
        }
       
  return (
    <div className='w-full mx-auto'>

<form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl p-2 px-5 shadow-md bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
{/* star ratings here */}
<div className='flex justify-center'>
 {[...Array(5)].map((_,index)=>{   //using _ because the property is not useful but presence needed
   const ratingValue= index + 1;
   
   return(
    
    <div className='mb-5' key={index}>
    <label className='hover:cursor-pointer'
    onMouseEnter={()=>setStarHover(ratingValue)}
    onMouseLeave={()=>setStarHover(0)}

>
    <input type='radio' className='hidden ' value={ratingValue} onClick={()=>setStarRating(ratingValue)}/>
      <p className={`text-5xl transition-all duration-700 ${ratingValue <= (starHover || starRating) ?
       "text-yellow-300 opacity-100" : "text-slate-300 " }`}>&#9733;</p></label>
       
    </div>

     
    
   )
 })}
   
 </div>

 
     <TextareaInput
       label="Customer Review"
       name="review"
       register={register}
       errors={errors}
     />
     {/* submit button */}
     <div className='flex gap-3 mt-3 justify-end'>
     <Button onClick={toggleCollapse} outline gradientMonochrome="failure" className=" montserrat">
   Cancel
 </Button>
 

 {loading ? (
  <Button gradientMonochrome="success" type="submit" className=" montserrat flex gap-1"> 
   
     Submitting <LoadingDots/></Button>
 ): (
  <Button gradientMonochrome="success"  type="submit" className="montserrat"> 
      Submit</Button>)}


     </div>


      </form>
    </div>
  )
}
