'use client'
import { Heart } from 'lucide-react'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export default function WishlistBtn({product}) {
     //like state
     const [isLiked, setIsLiked] = useState(false);
     const [signedUser, setSignedUser] = useState(null);
     const [loading, setLoading]=useState(false)
     const { data: session } = useSession();
     const id=session?.user?.id
       //get list of users
    const getUser=async ()=>{
        try {
        setLoading(true)
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
          const res= await fetch(`${baseUrl}/api/register/${id}`)
          const data= await res.json()
          setSignedUser(data)
          setIsLiked(data.wishlist.includes(product.id))
          setLoading(false)
        } catch (error) {
          console.log(error)
           setLoading(false)
        }
      }
      // trigger the getUser function only when there's session
      useEffect(() => {
        if(session){
  
          getUser()
      }
      }, [session])
 
      //handle like
    const handleLike = async () => {
        if (!session) {
         toast.error('Oooops! You Are Not Logged in')
          return;
        }
    
        try {
         setLoading(true)
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
          const response = await fetch(`${baseUrl}/api/wishlist`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId :product.id}),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setIsLiked(!isLiked); // Update local state based on response
            toast.success(`${isLiked ? 'Product Removed from Wishlist' : 'Product Added to Wishlist' }`)
            setLoading(false)
          } else {
            // Handle errors (optional: display user-friendly messages)
            console.error('Error updating wishlist:', data.message);
            toast.error(data.message)
             setLoading(false)
          }
        } catch (error) {
          console.error('Error:', error);
           setLoading(false)
        }
      };
    
  return (
    <div>
        <button onClick={handleLike} className='flex dark:text-slate-50 text-slate-500 text-sm gap-1 p-1 mt-2 md:mb-8'>
        <Heart size={18} fill={`${isLiked ? 'red':'white'}`}/> {isLiked ? 'Added to wishlist' : 'Add to wishlist'}</button>
    </div>
  )
}
