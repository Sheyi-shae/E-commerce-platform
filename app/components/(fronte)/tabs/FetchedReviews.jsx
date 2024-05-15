import { Star } from 'lucide-react';
import React, { useState } from 'react'

export default function FetchedReviews({key,review}) {
    const [starRating,setStarRating]=useState(review.ratings)
    const formatDate = (originalDate) => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const dd = originalDate.getDate();
      const monthIndex = originalDate.getMonth();
      const yyyy = originalDate.getFullYear();
      const suffix = (dd === 1 || dd === 21 || dd === 31) ? 'st' : (dd === 2 || dd === 22) ? 'nd' : (dd === 3 || dd === 23) ? 'rd' : 'th';
      return `${dd}${suffix} ${months[monthIndex]} ${yyyy}`;
    };
  return (
    <div>
    
        <div key={key} className="bg-slate-100 w-[80vw]  md:w-[50vw] lg:w-[60vw] rounded-md shadow-md mb-2 px-2 py-2 flex flex-col">
      <div className="flex justify-between mb-2">
        <h3 className="text-lg font-medium mr-2 capitalize">{review.customer_name}</h3>
        <div className="flex items-center">
         
          <span className="text-gray-500 ml-1">
          <div className='flex justify-center'>
 {[...Array(5)].map((star,index)=>{
   const ratingValue= index + 1;
   
   return(
    
    <div className='mb-5' key={index}>
    <label className='hover:cursor-pointer'>
    <input type='radio' className='hidden ' value={ratingValue} />
      <p className={`md:text-3xl text-sm transition-all duration-700 ${ratingValue <= ( starRating) ?
       "text-yellow-300 " : "text-slate-300 " }`}>&#9733;</p></label>
       
    </div>

     
    
   )
 })}
   
 </div>
          </span>
        </div>
      </div>
      
      <p className="text-gray-700">{review.review}</p>
      <div className='flex justify-end text-xs'> {formatDate(new Date(review.createdAt))}</div>
    </div>
   
    </div>
  )
}
