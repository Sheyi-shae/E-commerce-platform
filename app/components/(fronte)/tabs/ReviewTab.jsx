"use client"
import { ChevronDown, ChevronUp, Star } from 'lucide-react';
import React, { useState } from 'react';
import TextInput, { TextareaInput } from '../../formInputs/TextInput';
import { useForm } from 'react-hook-form';
import { Button, RatingStar } from 'flowbite-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { makePostRequest } from '@/lib/apiRequest';
import FetchData from '@/lib/fetchData(client)';
import ReviewForm from './ReviewForm';
import FetchedReviews from './FetchedReviews';
import { useSession } from 'next-auth/react';

export default function ReviewTab({productId}) {
  const { data: session } = useSession();
     const user=session?.user
  const [isOpen, setIsOpen] = useState(false);
  const [product,setProduct]=useState([])

  


  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
 

  
  return (
    <div  className='w-full '>
    {/* star rating */}
    <div className='w-full md:w-[50vw] lg:w-[60vw]'>
    <div className='mt-2 flex justify-center '>
   {!isOpen && 
      <Button outline onClick={toggleCollapse} disabled={!user} gradientMonochrome="success">WRITE A REVIEW</Button>
    }
    </div>
    
    <div
        className={`p-4 transition-all w-full  mx-auto flex justify-center duration-300 ${
          isOpen ? 'h-auto w-full opacity-100 mx-auto' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <ReviewForm productId={productId} isOpen={isOpen} setIsOpen={setIsOpen}/>
     
      </div>
      <FetchData state={product} setState={setProduct} endpoint={`products/${productId}`}/>

      {product.reviews?.length > 0 ? (
  <div className="mb-8">
   
    {product.reviews.map((review) => (
      <FetchedReviews key={review.id} review={review} /> // Use unique identifier from review object
    ))}
  </div>
) : (
  <div>
    <p className="text-gray-500">Be the first to review this product</p>
  </div>
)}
   
</div>

    </div>
  )
}
 