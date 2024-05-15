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

export default function ReviewTab({productId}) {
  const userId= "user1";
  const [isOpen, setIsOpen] = useState(false);

  const[reviews,setReviews]=useState([])


  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const AnimatedSubmitButton = ({ children ,onClick}) => {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }} // Optional hover effect
        animate={{ outlineOffset: [-4, 4, -4, 3] }} // Increased outline movement
        transition={{ duration: 2, repeat: Infinity }}
        onClick={onClick}
      >
        {children}
      </motion.button>
    );
  };
  
 

  
  return (
    <div  className='w-full '>
    {/* star rating */}
    <div className='w-full md:w-[50vw] lg:w-[60vw]'>
    <div className='mt-2 flex justify-center '>
   {isOpen ? <Button onClick={toggleCollapse} outline gradientMonochrome="failure">
     CANCEL 
    </Button> : <AnimatedSubmitButton onClick={toggleCollapse}>
      <Button outline gradientMonochrome="success">WRITE A REVIEW</Button>
    </AnimatedSubmitButton> }
    </div>
    
    <div
        className={`p-4 transition-all w-full  flex justify-center duration-300 ${
          isOpen ? 'h-auto w-full opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <ReviewForm productId={productId} isOpen={isOpen} setIsOpen={setIsOpen}/>
     
      </div>
      <FetchData state={reviews} setState={setReviews} endpoint={`reviews/${productId}`}/>
     

      {reviews.length > 0 ? (
  <div className="mb-8">
    <h2 className="text-2xl font-medium mb-4">Customer Reviews</h2>
    {reviews.map((review) => (
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
 